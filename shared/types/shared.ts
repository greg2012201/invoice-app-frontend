export type TToken = string | null | undefined;
/* eslint-disable-next-line */
export type Resolve<T> = T extends Function
    ? T
    : { [Property in keyof T]: T[Property] };

export type PartialRequire<TObj, TRequired extends keyof TObj> = Resolve<
    Required<Pick<TObj, TRequired>> & Partial<TObj>
>;

export type ReadOnlyMap<T> = {
    readonly [P in keyof T]: T[P];
};

export const isString = (x: unknown): x is string => typeof x === 'string';
