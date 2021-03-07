import React, { useState, useContext } from 'react';
import { context, useCopy } from 'dumi/theme';
import { IApiComponentProps } from 'dumi/theme';

import './index.less';
import { logger } from '@/libs/utils/libs';
import ErrorBoundary from '@/libs/utils/ErrorBoundary';

const LOCALE_TEXTS = {
  'zh-CN': {
    name: '属性名',
    description: '描述',
    type: '类型',
    default: '默认值',
    required: '是否必传',
    value: '测试值',
  },
  'en-US': {
    name: 'Name',
    description: 'Description',
    type: 'Type',
    default: 'Default',
    required: 'required',
    value: 'value',
  },
};

export interface IParamFnProps {
  [name: string]: string | string[] | any;
}
export interface IParamProps {
  /**
   * component property name
   */
  identifier: string;
  /**
   * component property label
   */
  name?: string;
  /**
   * component property description
   */
  description?: string;
  'description.zh-CN'?: string;
  'description.en-US'?: string;
  /**
   * component property type
   */
  type: string;
  /**
   * component property default value
   */
  default?: string;
  /**
   * property whether required
   */
  required?: true;
}

interface IFnBuilderProps extends IApiComponentProps {
  dealFnRun: (fnData: IParamFnProps) => void | string;
  paramArr: IParamProps[];
}
interface IFnModalProps {
  modalState?: boolean;
  errorMsg?: string;
}
const ParamFnBuilder = ({
  identifier,
  export: expt,
  dealFnRun,
  paramArr = [],
}: IFnBuilderProps) => {
  if (!paramArr.length) {
    return <></>;
  }

  const { locale = '' } = useContext(context);
  const texts = /^zh|cn$/i.test(locale)
    ? LOCALE_TEXTS['zh-CN']
    : LOCALE_TEXTS['en-US'];

  const [modalConfig, setModalConfig] = useState<IFnModalProps>({});
  const [resData, setResData] = useState<any>();
  const defaultFnData = paramArr.reduce((acc, param) => {
    acc[param.identifier] = param.default;
    return acc;
  }, {} as IParamFnProps);

  const [fnData, setFnData] = useState<IParamFnProps>(defaultFnData);
  const [copyCode, copyStatus] = useCopy();
  const _dealFnRun = () => {
    try {
      setResData('');
      let errorMsg = '';
      const errorData = paramArr.filter(param => {
        return (
          param.required &&
          !fnData[param.identifier] && fnData[param.identifier] !== 0 &&
          (errorMsg += `参数 ${param.identifier}, `)
        );
      });
      if (errorMsg) {
        errorMsg += `以上 ${errorData.length} 个参数为必传，请输入对应值`;
        setModalConfig({ modalState: true, errorMsg });
      } else {
        setModalConfig({ modalState: false, errorMsg: '' });
        if (typeof dealFnRun === 'function') {
          const res = dealFnRun({ ...fnData });
          !!res && setResData(res);
        }
      }
    } catch (error) {
      const oEnv = process.env.NODE_ENV;
      oEnv === 'development' && logger.log(identifier, fnData, error);
      setModalConfig({
        modalState: true,
        errorMsg: `函数名 : ${expt}\n 请求参数:${JSON.stringify(
          fnData,
        )}\n, 具体错误:\n${error}`,
      });
    }
  };
  const dealFnChange = (
    currValue: string | string[],
    identifier: string,
    paramType?: string,
  ) => {
    // 预留参数类型做值解析
    setFnData({ ...fnData, [identifier]: currValue });
  };
  const _copyCode = () => {
    logger.log(resData);
    copyCode(resData);
  };

  return (
    <ErrorBoundary>
      {paramArr.length && (
        <div className="markdown param-builder">
          <p className="title">{`${identifier}--${expt}`}</p>
          <div
            className={`alert error ${
              modalConfig.modalState ? 'show' : 'hidden'
            }`}
          >
            {modalConfig.errorMsg}
          </div>
          <table>
            <thead>
              <tr>
                <th>{texts.name}</th>
                <th>{texts.value}</th>
              </tr>
            </thead>
            <tbody>
              {paramArr.map((param, idx) => (
                <tr key={param.identifier}>
                  <td>{`${param.identifier}${param.required ? ' *' : ''}`}</td>
                  <td>
                    <textarea
                      data-index={idx}
                      data-attr={param.identifier}
                      className={modalConfig.modalState ? 'error' : ''}
                      required={!!param.required}
                      {...{
                        value: fnData[param.identifier],
                        onChange: ev =>
                          dealFnChange(
                            ev.target.value,
                            param.identifier,
                            param.type,
                          ),
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={2}>
                  <div className={`res-box ${!!resData ? 'show' : 'hidden'}`}>
                    <pre className="alert info pre ">{resData}</pre>
                    <button
                      title="Copy source code"
                      className="__dumi-default-icon copy"
                      role="copy"
                      data-status={copyStatus}
                      onClick={_copyCode}
                    ></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <input
                    type="button"
                    className="fn-btn"
                    value="运行"
                    onClick={_dealFnRun}
                  />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </ErrorBoundary>
  );
};

export default ParamFnBuilder;
