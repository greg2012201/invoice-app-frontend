export type TToken = string | null | undefined;

export type ReadOnlyMap<T> = {
    readonly [P in keyof T]: T[P];
};
export const isString = (x: unknown): x is string => typeof x === 'string';
