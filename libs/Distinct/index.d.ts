export interface IDistinctExecFnProps {
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
export declare const DistinctExecFn: (param: IDistinctExecFnProps) => void;
declare const Distinct: () => JSX.Element;
export default Distinct;
