import FnBuilder from '@/libs/utils/FnBuilder';
import { logger, parse, BaseExecFn } from '@/libs/utils/libs';
import React from 'react';
const path = require('path');

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
export const ExecFn = (param: IExecFnProps): string => {
  let { paramArr, fnStr } = param;
  let res = '';
  (!paramArr || !paramArr.length) && (paramArr = []);
  const fnReg = /function\s([a-zA-z1-9]+)\(([a-zA-z1-9]+)\)\{([\s\S]+)\}/gm;
  if (fnReg.test(fnStr)) {
    // 删除注释
    fnStr = fnStr
      .replace(/(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g, '\n')
      .replace(/(?:^|\n|\r)\s*\/\/.*(?:\r|\n|$)/g, '\n');
    const fnName = fnStr.replace(fnReg, '$1');
    const dealFnStr = `
      ${fnStr};
      return ${fnName}.apply(this,${paramArr});
    `;
    const fnCallBack = BaseExecFn(dealFnStr);
    try {
      res = fnCallBack() || '';
    } catch (error) {
      res = error.message;
      logger.log(error);
    }
  } else {
    res = `${fnStr} 函数中没有有效代码~~`;
  }
  return res;
};
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
export const GetRandomId = (param: IRandomIdFnProps): string => {
  const { prefix = '', type = 0 } = param;
  const MAX_LENGTH = 13;
  let { length = MAX_LENGTH } = param;
  (length < 0 || length > MAX_LENGTH) && (length = MAX_LENGTH);
  let res = '';
  switch (Number(type)) {
    case 1: {
      res = Math.random()
        .toString(16)
        .slice(-length)
        .replace(/(.{4,})(.{4,})(.{5,})/g, '$1-$2-$3');
      break;
    }
    default: {
      res = Math.random()
        .toString(16)
        .slice(-length);
      break;
    }
  }
  return `${prefix}R${res.replace('.', '').toUpperCase()}`;
};
export interface ISplitFnProps {
  /**
   * 待分割的字符串
   * @description  split str
   * @description.zh-CN 待分割的字符串
   * @default
   */
  str?: string;
}
export const SplitLineStr = (param: ISplitFnProps): string => {
  const { str = '' } = param;
  return typeof str === 'string' && str && /\n/.test(str)
    ? str
        .replace(/\s\n/gm, '')
        .split('\n')
        .join(',')
    : '';
};

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
const formatFieldStr = (str: string): string => {
  return `|${str ? '`' + str + '`' : ''} |`;
};
export const formatArr2MD = ({ defaultData, titleArr }: IFormatArrProps) => {
  typeof defaultData !== 'object' && (defaultData = parse(defaultData));
  typeof titleArr !== 'object' && (titleArr = parse(titleArr));
  const DEFAUlT_TAG = '|';
  let formatStr = `|${titleArr.join(DEFAUlT_TAG)}|\n|${Array(
    titleArr.length + 1,
  ).join(`:---${DEFAUlT_TAG}|`)}\n`;
  const dealArrField = (curr: IBaseObj | string) => {
    formatStr += `|`;
    typeof curr !== 'object'
      ? (formatStr += curr)
      : Object.keys(curr)
          .map(item => (formatStr += formatFieldStr(curr[item])))
          .join(` ${DEFAUlT_TAG} `);
    formatStr += `|\n`;
    return curr;
  };
  defaultData.reduce((acc, curr) => dealArrField(curr), '');
  return formatStr.replace(/\|{2,}/g, '|');
};
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
export const formatObj2MD = ({ defaultData, titleArr }: IFormatObjProps) => {
  typeof defaultData !== 'object' && (defaultData = parse(defaultData));
  typeof titleArr !== 'object' && (titleArr = parse(titleArr));
  const DEFAUlT_TAG = '|';
  let formatStr = `|${titleArr.join(DEFAUlT_TAG)}|\n|${Array(
    titleArr.length + 1,
  ).join(`:---${DEFAUlT_TAG}|`)}\n`;
  for (const name in defaultData) {
    const currItem = defaultData[name];
    Object.keys(currItem)
      .map(item => (formatStr += formatFieldStr(currItem[item])))
      .join(` ${DEFAUlT_TAG} `);
    formatStr += '\n';
  }
  return formatStr.replace(/\|\|/g, '|');
};

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
export const tranTxt2BaseArr = ({
  sTxt,
  isObject = false,
  titleNameIndex = 0,
  fnCallBack,
}: ITranArrProps) => {
  typeof isObject !== 'boolean' && (isObject = parse(isObject));
  typeof fnCallBack !== 'function' &&
    (fnCallBack = BaseExecFn(fnCallBack || ''));
  if (!sTxt) {
    return isObject ? {} : [];
  }
  const baseArr = sTxt.split('\n').map(item => item.split('\t'));
  logger.log('分割之后的长度是：', baseArr.length);
  if (!isObject) {
    return baseArr;
  }
  const repeatArr: any[] = [];
  const res = baseArr.reduce((acc: IBaseObj, cur: string[], idx: number) => {
    if (!cur[titleNameIndex]) {
      logger.log(`第${idx} 行 title 字段有误`, titleNameIndex, cur);
      return acc;
    }
    if (!acc[cur[titleNameIndex]]) {
      acc[cur[titleNameIndex]] = {};
    } else {
      // 之前已经读写过
      logger.log('已经读写过', titleNameIndex, cur[titleNameIndex], cur);
      repeatArr.push(cur);
    }
    fnCallBack && fnCallBack(acc, cur);
    !Object.keys(acc[cur[titleNameIndex]]).length &&
      (acc[cur[titleNameIndex]] = cur);
    return acc;
  }, {} as IBaseObj);
  logger.log('转换成对象之后的长度是：', Object.keys(res).length);
  logger.log('重复读写过', repeatArr.length);
  logger.log('重复读写过', repeatArr);
  return res;
};

export const tranTxt2DIYArr = ({
  sTxt,
  isObject = false,
  titleNameIndex = 0,
  fnCallBack,
}: ITranArrProps) => {
  typeof isObject !== 'boolean' && (isObject = parse(isObject));
  typeof fnCallBack !== 'function' &&
    (fnCallBack = BaseExecFn(fnCallBack || ''));
  const res = isObject ? {} : [];
  if (!sTxt) {
    return res;
  }
  const baseArr = sTxt.split('\n').map(item => item.split('\t'));
  if (!isObject) {
    return baseArr;
  }
  return baseArr.reduce((acc, cur) => {
    if (!cur[titleNameIndex]) {
      return acc;
    }
    let res: IBaseObj | void = {};
    fnCallBack && (res = fnCallBack(acc, cur));
    acc[cur[titleNameIndex]] = res
      ? { ...acc[cur[titleNameIndex]], res }
      : acc[cur[titleNameIndex]];
    return acc;
  }, {} as IBaseObj);
};

const identifier = 'BaseTool';
const apiRun = {
  ExecFn,
  GetRandomId,
  SplitLineStr,

  // from util
  formatArr2MD,
  formatObj2MD,
  tranTxt2BaseArr,
  tranTxt2DIYArr,
};
const APIHelper = () => {
  return <FnBuilder identifier={identifier} apiRun={apiRun} />;
};
export default APIHelper;
