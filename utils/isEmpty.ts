function isEmpty<TObj extends Record<string, unknown>>(obj: TObj): boolean {
    return Object.keys(obj).length === 0;
}

export default isEmpty;
