import {
    recalculatePriceNet,
    recalculateGrossValue,
    calculateVat,
    calculatePrice,
} from '../invoice/calculatePrice';

describe('recalculatePriceNet', () => {
    it('should return priceNet if it is greater than 0', () => {
        const values = {
            priceNet: 10,
            valueNet: 0,
            grossValue: 0,
            sumVat: 0,
            quantity: 1,
        };

        const result = recalculatePriceNet(values);

        expect(result).toBe(values.priceNet);
    });

    it('should return valueNet if priceNet is 0 and valueNet is greater than 0', () => {
        const values = {
            priceNet: 0,
            valueNet: 20,
            grossValue: 50,
            sumVat: 30,
            quantity: 1,
        };

        const result = recalculatePriceNet(values);

        expect(result).toBe(values.valueNet);
    });

    it('should return grossValue minus sumVat if both priceNet and valueNet are 0', () => {
        const values = {
            priceNet: 0,
            valueNet: 0,
            grossValue: 100,
            sumVat: 20,
            quantity: 1,
        };

        const result = recalculatePriceNet(values);

        expect(result).toBe(values.grossValue - values.sumVat);
    });
});

describe('recalculateGrossValue', () => {
    it('should return 0 if valueNet is 0', () => {
        const values = {
            priceNet: 10,
            vat: 20,
            grossValue: 0,
            quantity: 1,
            valueNet: 0,
        };

        const result = recalculateGrossValue(values);

        expect(result).toBe(0);
    });

    it('should return grossValue if it is greater than 0', () => {
        const values = {
            priceNet: 0,
            vat: 20,
            grossValue: 100,
            quantity: 1,
            valueNet: 0,
        };

        const result = recalculateGrossValue(values);

        expect(result).toBe(values.grossValue);
    });

    it('should return valueNet plus vat if both grossValue and valueNet are 0', () => {
        const values = {
            priceNet: 10,
            vat: 20,
            grossValue: 0,
            quantity: 1,
            valueNet: 50,
        };

        const result = recalculateGrossValue(values);

        const expectedValue = values.valueNet + values.vat;
        expect(result).toBe(expectedValue);
    });
});

describe('calculateVat', () => {
    it('should return sumVat if it is greater than 0', () => {
        const values = {
            priceNet: 0,
            vatRate: 20,
            valueNet: 0,
            grossValue: 0,
            sumVat: 30,
        };

        const result = calculateVat(values);

        expect(result).toBe(values.sumVat);
    });

    it('should return vat calculated from priceNet if priceNet is greater than 0', () => {
        const values = {
            priceNet: 100,
            vatRate: 20,
            valueNet: 0,
            grossValue: 0,
            sumVat: 0,
        };

        const expectedValue = values.priceNet * (values.vatRate / 100);
        const result = calculateVat(values);

        expect(result).toBe(expectedValue);
    });

    it('should return vat calculated from valueNet if valueNet is greater than 0', () => {
        const values = {
            priceNet: 0,
            vatRate: 20,
            valueNet: 50,
            grossValue: 0,
            sumVat: 0,
        };

        const expectedValue = values.valueNet * (values.vatRate / 100);
        const result = calculateVat(values);

        expect(result).toBe(expectedValue);
    });

    it('should return vat calculated by reverse percentage if grossValue is greater than 0', () => {
        const values = {
            priceNet: 0,
            vatRate: 23,
            valueNet: 0,
            grossValue: 1230,
            sumVat: 0,
        };

        const expectedValue = 230;
        const result = calculateVat(values);

        expect(result).toBe(expectedValue);
    });

    it('should return 0 if none of the conditions are met', () => {
        const values = {
            priceNet: 0,
            vatRate: 20,
            valueNet: 0,
            grossValue: 0,
            sumVat: 0,
        };

        const result = calculateVat(values);

        expect(result).toBe(0);
    });
});

describe('calculatePrice', () => {
    it('should calculate and return the price based on the provided values', () => {
        const values = {
            quantity: 2,
            priceNet: 0,
            vatRate: 20,
            valueNet: 0,
            grossValue: 0,
            sumVat: 0,
        };

        const recalculatedVat = calculateVat(values);
        const recalculatedPriceNet = recalculatePriceNet(values);
        const recalculatedGrossValue = recalculateGrossValue({
            quantity: values.quantity,
            priceNet: values.priceNet,
            vat: values.sumVat > 0 ? values.sumVat : recalculatedVat,
            valueNet:
                values.valueNet > 0 ? values.valueNet : recalculatedPriceNet,
            grossValue: values.grossValue,
        });

        const expectedResult = {
            quantity: values.quantity,
            priceNet: recalculatedPriceNet,
            vatRate: values.vatRate,
            valueNet:
                values.valueNet > 0
                    ? values.valueNet
                    : recalculatedPriceNet * values.quantity,
            sumVat:
                values.sumVat > 0
                    ? values.sumVat
                    : recalculatedVat * values.quantity,
            grossValue:
                values.grossValue > 0
                    ? values.grossValue
                    : recalculatedGrossValue * values.quantity,
        };

        const result = calculatePrice(values);

        expect(result).toEqual(expectedResult);
    });
});
