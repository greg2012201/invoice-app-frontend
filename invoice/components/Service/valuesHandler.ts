import { Values, calculatePrice } from '@/invoice/calculatePrice';

type CurrentValue = {
    path: string;
    value: number;
};

type ValuesHandler = {
    set: (path: string, value: number) => void;
    get: (path: string) => number;
    currentValue: CurrentValue;
};

const MODIFIERS = ['quantity', 'VATRate'];
const FIELDS = ['priceNet', 'valueNet', 'sumVAT', 'grossValue'];

function findFirstNoneZeroField(
    get: ValuesHandler['get']
): Partial<CurrentValue> {
    const field: Partial<CurrentValue> = {};

    FIELDS.forEach(path => {
        const pathValue = get(path);
        if (pathValue > 0) {
            field.path = path;
            field.value = pathValue;
        }
    });

    return field;
}

function buildPropsToCalculate(
    get: ValuesHandler['get'],
    currentValue: ValuesHandler['currentValue']
): Values {
    const props = { [currentValue.path]: currentValue.value };

    MODIFIERS.forEach(path => {
        const prop = props[path];
        if (prop) {
            return;
        }
        props[path] = get(path);
    });
    if (MODIFIERS.includes(currentValue.path)) {
        const foundNonZeroField = findFirstNoneZeroField(get);
        if (foundNonZeroField?.path && foundNonZeroField?.value) {
            props[foundNonZeroField.path] = foundNonZeroField.value;
        }
    }
    return props as Values;
}

function valuesHandler({ set, get, currentValue }: ValuesHandler): void {
    const calculatedValues = calculatePrice(
        buildPropsToCalculate(get, currentValue)
    );
    Object.entries(calculatedValues).forEach(([key, value]) => {
        set(key, value);
    });
}

export default valuesHandler;
