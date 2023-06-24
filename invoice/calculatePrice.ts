import type { InvoiceValues } from './types/invoice';

function getPercentage(value: number, percent: number): number {
    return value * (percent / 100);
}
function reverseGetPercentage(value: number, percent: number): number {
    const reversedPercentage = 1 + percent / 100;

    return value - value / reversedPercentage;
}
export function recalculatePriceNet(
    values: Pick<
        InvoiceValues & { vat: number },
        'priceNet' | 'valueNet' | 'grossValue' | 'sumVat' | 'quantity'
    >
): number {
    const { priceNet, sumVat, grossValue, valueNet } = values;

    if (priceNet > 0) {
        return priceNet;
    }

    return valueNet || grossValue - sumVat;
}
export function recalculateGrossValue(
    values: Pick<
        InvoiceValues & { vat: number },
        'priceNet' | 'grossValue' | 'vat' | 'quantity' | 'valueNet'
    >
): number {
    const { priceNet, vat, grossValue, valueNet } = values;
    if (grossValue > 0) {
        return grossValue;
    }
    if (valueNet === 0) {
        return 0;
    }
    return valueNet + vat || priceNet + vat;

    return 0;
}

export function calculateVat({
    priceNet,
    vatRate,
    grossValue,
    valueNet,
    sumVat,
}: Pick<
    InvoiceValues,
    'priceNet' | 'vatRate' | 'valueNet' | 'grossValue' | 'sumVat'
>): number {
    if (sumVat > 0) {
        return sumVat;
    }
    if (priceNet > 0) {
        return getPercentage(priceNet, vatRate);
    }
    if (valueNet > 0) {
        return getPercentage(valueNet, vatRate);
    }
    if (grossValue > 0) {
        return reverseGetPercentage(grossValue, vatRate);
    }
    return 0;
}

export function calculatePrice({
    quantity = 1,
    priceNet,
    vatRate,
    valueNet,
    grossValue,
    sumVat,
}: InvoiceValues): InvoiceValues {
    const recalculatedVat = calculateVat({
        priceNet,
        vatRate,
        valueNet,
        grossValue,
        sumVat,
    });
    const recalculatedPriceNet = recalculatePriceNet({
        quantity,
        priceNet,
        valueNet,
        grossValue,
        sumVat,
    });
    const recalculatedGrossValue = recalculateGrossValue({
        quantity,
        priceNet,
        vat: sumVat > 0 ? sumVat : recalculatedVat,
        valueNet: valueNet > 0 ? valueNet : recalculatedPriceNet,
        grossValue,
    });
    return {
        quantity,
        priceNet: recalculatedPriceNet,
        vatRate,
        valueNet: valueNet > 0 ? valueNet : recalculatedPriceNet * quantity,
        sumVat: sumVat > 0 ? sumVat : recalculatedVat * quantity,
        grossValue:
            grossValue > 0 ? grossValue : recalculatedGrossValue * quantity,
    };
}
