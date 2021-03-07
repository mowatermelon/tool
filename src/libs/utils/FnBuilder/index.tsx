import React from 'react';
import { useApiData } from 'dumi/theme';

import ParamFnBuilder, {
  IParamFnProps,
  IParamProps,
} from '@/libs/utils/ParamFnBuilder';
import './index.less';
import ErrorBoundary from '@/libs/utils/ErrorBoundary';

export interface IFnProps {
  [name: string]: string | string[] | any;
}
interface IFnBuilderProps {
  identifier: string;
  apiRun: Record<string, any>;
}
const FnBuilder = ({ identifier, apiRun }: IFnBuilderProps) => {
  let exptsArr: [string, IParamProps[]][] = [];
  let _dealFnRun = (attr: string, param: IParamFnProps) => {};
  try {
    const apis = useApiData(identifier);
    if (!apis && typeof apis !== 'object') {
      return <></>;
    }
    exptsArr = Object.entries(apis);
    if (!exptsArr.length) {
      return <></>;
    }
    _dealFnRun = (attr: string, param: IParamFnProps) => {
      const res = typeof apiRun[attr] === 'function' && apiRun[attr](param);
      return Array.isArray(res) || typeof res === 'object'
        ? JSON.stringify(res, null, 2)
        : res;
    };
  } catch (error) {
    return <ErrorBoundary errorState={true} />;
  }
  return (
    <ErrorBoundary>
      <div className="markdown">
        <h2>{identifier} 在线运行</h2>
        {exptsArr.length &&
          exptsArr.reduce((expts, [expt, paramArr], index) => {
            expts.push(
              <ParamFnBuilder
                key={`${identifier}-${index}`}
                identifier={identifier}
                export={expt}
                dealFnRun={param => _dealFnRun(expt, param)}
                paramArr={paramArr}
              />,
            );
            return expts;
          }, [] as React.ReactElement[])}
      </div>
    </ErrorBoundary>
  );
};

export default FnBuilder;
