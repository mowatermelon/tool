import { IApiComponentProps } from 'dumi/theme';
import './index.less';
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
declare const ParamFnBuilder: ({ identifier, export: expt, dealFnRun, paramArr, }: IFnBuilderProps) => JSX.Element;
export default ParamFnBuilder;
