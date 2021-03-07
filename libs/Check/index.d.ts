import React from 'react';
export interface ICheckFnExecFnProps {
    /**
     * 函数参数
     * @description  param list
     * @description.zh-CN 需要执行的函数参数
     * @default      1
     */
    paramArr: any[];
    /**
     * 需要执行的函数字符串
     * @description  run function str
     * @description.zh-CN 需要执行的函数字符串
     * @default  ''
     */
    fnStr: string;
}
export declare const CheckExecFn: (param: ICheckFnExecFnProps) => void;
export interface IHelloProps {
    /**
     * Extra CSS className for this component
     * @description.zh-CN 组件额外的 CSS className
     */
    className?: string;
    /**
     * I'm required
     * @description.zh-CN 我是一个必选属性
     */
    type: string;
}
export declare const Hello: React.FC<IHelloProps>;
declare const Check: () => JSX.Element;
export default Check;
