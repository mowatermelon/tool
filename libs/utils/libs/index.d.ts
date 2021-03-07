export declare const logger: Console;
export declare const stringify: {
    (value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string;
    (value: any, replacer?: (string | number)[] | null | undefined, space?: string | number | undefined): string;
};
export declare const parse: (str?: string) => any;
export declare const tryCatch: (fnCallBack: (...param: any) => string | void) => (...param: any) => {};
export declare const BaseExecFn: (dealFnStr: string) => Function;
declare const _default: {};
export default _default;
