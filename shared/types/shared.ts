export type TToken = string | null | undefined;

export const isString = (x: unknown): x is string => typeof x === 'string';
