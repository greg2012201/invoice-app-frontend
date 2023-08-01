import type { PartialRequire, Resolve } from '@/shared/types/shared';
import type { InvoiceValues } from './types/invoice';

type MakeInvoiceFragmentValues<TKey extends keyof InvoiceValues> = Resolve<
    Pick<InvoiceValues, TKey>
>;

const roundAllValues = (values: InvoiceValues): InvoiceValues => {
    const newValues: Partial<InvoiceValues> = {};

    Object.entries({ ...values }).forEach(([key, value]) => {
        newValues[key as keyof typeof newValues] =
            Math.round(value * 100) / 100;
    });

    return newValues as InvoiceValues;
};

function getPercentage(value: number, percent: number): number {
    return value * (percent / 100);
}
function reverseGetPercentage(value: number, percent: number): number {
    if (!value) {
        return 0;
    }
    const reversedPercentage = 1 + percent / 100;

    return value - value / reversedPercentage;
}
export function calculatePriceNet(
    values: MakeInvoiceFragmentValues<
        'priceNet' | 'valueNet' | 'grossValue' | 'quantity' | 'sumVAT'
    >
): number {
    const { priceNet, sumVAT, grossValue, valueNet, quantity } = values;

    if (priceNet > 0) {
        return priceNet;
    }
    if (valueNet > 0) {
        return valueNet / quantity;
    }
    if (grossValue > 0) {
        return (grossValue - sumVAT) / quantity;
    }

    return 0;
}
export function calculateGrossValue(
    values: MakeInvoiceFragmentValues<
        'priceNet' | 'grossValue' | 'quantity' | 'valueNet' | 'sumVAT'
    > & { vat: number }
): number {
    const {
        quantity = 1,
        vat,
        sumVAT,
        priceNet,
        grossValue,
        valueNet,
    } = values;

    if (grossValue > 0) {
        return grossValue;
    }
    if (valueNet > 0) {
        return valueNet + sumVAT;
    }
    return (priceNet + vat) * quantity;
}

export function calculateValueNet(
    values: MakeInvoiceFragmentValues<
        'priceNet' | 'grossValue' | 'quantity' | 'valueNet' | 'sumVAT'
    >
): number {
    const { quantity = 1, priceNet, grossValue, valueNet, sumVAT } = values;
    if (valueNet > 0) {
        return valueNet;
    }
    if (priceNet > 0) {
        return priceNet * quantity;
    }
    if (grossValue > 0) {
        return grossValue - sumVAT;
    }
    return 0;
}

export function calculateVat({
    priceNet = 0,
    VATRate = 0,
    grossValue = 0,
    valueNet = 0,
    quantity = 1,
    sumVAT = 0,
}: MakeInvoiceFragmentValues<
    'priceNet' | 'VATRate' | 'valueNet' | 'grossValue' | 'quantity' | 'sumVAT'
>): number {
    if (VATRate === 0) {
        return 0;
    }

    if (sumVAT > 0) {
        return sumVAT / quantity;
    }

    if (priceNet > 0) {
        return getPercentage(priceNet, VATRate);
    }
    if (valueNet > 0) {
        return getPercentage(valueNet / quantity, VATRate);
    }
    if (grossValue > 0) {
        return reverseGetPercentage(grossValue / quantity, VATRate);
    }
    return 0;
}

function calculateSumVAT({
    quantity,
    sumVAT,
    vat,
    VATRate,
}: MakeInvoiceFragmentValues<'quantity' | 'sumVAT' | 'VATRate'> & {
    vat: number;
}): number {
    if (VATRate === 0) {
        return 0;
    }
    if (sumVAT > 0) {
        return sumVAT;
    }

    return vat * quantity;
}

export type Values = PartialRequire<InvoiceValues, 'quantity' | 'VATRate'>;

export function calculatePrice({
    quantity,
    priceNet = 0,
    VATRate = 0,
    valueNet = 0,
    grossValue = 0,
    sumVAT = 0,
}: Values): InvoiceValues {
    const vat = calculateVat({
        priceNet,
        VATRate,
        valueNet,
        grossValue,
        quantity,
        sumVAT,
    });
    const calculatedSumVAT = calculateSumVAT({
        quantity,
        sumVAT,
        vat,
        VATRate,
    });

    return roundAllValues({
        quantity,
        grossValue: calculateGrossValue({
            vat,
            quantity,
            grossValue,
            priceNet,
            valueNet,
            sumVAT: calculatedSumVAT,
        }),
        valueNet: calculateValueNet({
            quantity,
            grossValue,
            priceNet,
            valueNet,
            sumVAT: calculatedSumVAT,
        }),
        priceNet: calculatePriceNet({
            grossValue,
            priceNet,
            quantity,
            sumVAT: calculatedSumVAT,
            valueNet,
        }),
        sumVAT: calculatedSumVAT,
        VATRate,
    });
}
