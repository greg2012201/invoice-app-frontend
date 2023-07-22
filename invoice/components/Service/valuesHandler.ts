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

const FIELDS_CONFIG = ['quantity', 'VATRate'] as const;

function buildPropsToCalculate(
    get: ValuesHandler['get'],
    currentValue: ValuesHandler['currentValue']
): Values {
    const props = { [currentValue.path]: currentValue.value };

    FIELDS_CONFIG.forEach(path => {
        const prop = props[path];
        if (prop) {
            return;
        }
        props[path] = get(path);
    });
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
