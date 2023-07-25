export type TToken = string | null | undefined;
/* eslint-disable-next-line */
export type Resolve<T> = T extends Function
    ? T
    : { [Property in keyof T]: T[Property] };
export type ReadOnlyMap<T> = {
    readonly [P in keyof T]: T[P];
};
export const isString = (x: unknown): x is string => typeof x === 'string';
