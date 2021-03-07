export interface IExecFnProps {
    /**
     * 函数参数
     * @description  param list
     * @description.zh-CN 需要执行的函数参数
     * @default   []
     */
    paramArr: any[];
    /**
     * 需要执行的函数字符串
     * @description  run function str
     * @description.zh-CN 需要执行的函数字符串
     * @default  function name(params:type) {}
     */
    fnStr: string;
}
export declare const ExecFn: (param: IExecFnProps) => string;
export interface IRandomIdFnProps {
    /**
     * 主键前缀
     * @description  param list
     * @description.zh-CN 需要执行的函数参数
     * @default
     */
    prefix?: string;
    /**
     * 需要返回的随机数类型
     * @description  0 default 1 with -
     * @description.zh-CN 0 默认随机字符 1 带有 - 的随机字符串，仅限长度为 13 的情况，类似 "F15D-2A56-AF4C3"
     * @default 0
     */
    type?: number;
    /**
     * 需要返回随机数的长度
     * @description length
     * @description.zh-CN 需要返回随机数的长度
     * @default 13
     */
    length?: number;
}
export declare const GetRandomId: (param: IRandomIdFnProps) => string;
export interface ISplitFnProps {
    /**
     * 待分割的字符串
     * @description  split str
     * @description.zh-CN 待分割的字符串
     * @default
     */
    str?: string;
}
export declare const SplitLineStr: (param: ISplitFnProps) => string;
export interface IBaseObj {
    [name: string]: any;
}
export interface IFormatArrProps {
    /**
     * defaultData
     * @description  parse text
     * @description.zh-CN 需要解析的字符串文本
     * @default  []
     */
    defaultData: Array<IBaseObj | string>;
    /**
     * defaultData
     * @description  parse text
     * @description.zh-CN 需要解析对应的文章标题数组
     * @default  []
     */
    titleArr: string[];
}
export declare const formatArr2MD: ({ defaultData, titleArr }: IFormatArrProps) => string;
export interface IFormatObjProps {
    /**
     * defaultData
     * @description  parse text
     * @description.zh-CN 需要解析的字符串文本
     * @default  {"ee":{'tel':"111"},"ee1":{'tel':"11111"}}
     */
    defaultData: Record<string, IBaseObj>;
    /**
     * defaultData
     * @description  parse text
     * @description.zh-CN 需要解析对应的文章标题数组
     * @default  ['title']
     */
    titleArr: string[];
}
export declare const formatObj2MD: ({ defaultData, titleArr }: IFormatObjProps) => string;
export interface ITranArrProps {
    /**
     * sTxt
     * @description      parse text
     * @description.zh-CN 需要解析的字符串文本
     * @default  ''
     */
    sTxt: string;
    /**
     * isObject
     * @description      need object
     * @description.zh-CN 是否需要返回对象
     * @default  ''
     */
    isObject?: boolean;
    /**
     * titleNameIndex
     * @description title index
     * @description.zh-CN 标题列所在索引
     * @default  ''
     */
    titleNameIndex?: number;
    /**
     * titleNameIndex
     * @description title index
     * @description.zh-CN 标题列所在索引
     * @default  ''
     */
    fnCallBack?: Function | ((acc: any, cur: string[]) => void | IBaseObj);
}
export declare const tranTxt2BaseArr: ({ sTxt, isObject, titleNameIndex, fnCallBack, }: ITranArrProps) => IBaseObj;
export declare const tranTxt2DIYArr: ({ sTxt, isObject, titleNameIndex, fnCallBack, }: ITranArrProps) => IBaseObj;
declare const APIHelper: () => JSX.Element;
export default APIHelper;
