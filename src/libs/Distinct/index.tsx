import React from 'react';
import FnBuilder from '@/libs/utils/FnBuilder';

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
export const DistinctExecFn = (param: IDistinctExecFnProps) => {};
const identifier = 'Distinct';
const apiRun = {
  DistinctExecFn,
};
const Distinct = () => {
  return (
    <>
      <FnBuilder identifier={identifier} apiRun={apiRun} />
    </>
  );
};
export default Distinct;
