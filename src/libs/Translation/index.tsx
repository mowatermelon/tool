import React from 'react';
import FnBuilder from '@/libs/utils/FnBuilder';
import { logger } from '../utils/libs';

export interface ITranslationExecFnProps {
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
export const TranslationExecFn = (param: ITranslationExecFnProps) => {
  logger.log(param);
};
const identifier = 'Translation';
const apiRun = {
  TranslationExecFn,
};
const Translation = () => {
  return (
    <>
      <FnBuilder identifier={identifier} apiRun={apiRun} />
    </>
  );
};
export default Translation;
