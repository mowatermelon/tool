import './index.less';
export interface IFnProps {
    [name: string]: string | string[] | any;
}
interface IFnBuilderProps {
    identifier: string;
    apiRun: Record<string, any>;
}
declare const FnBuilder: ({ identifier, apiRun }: IFnBuilderProps) => JSX.Element;
export default FnBuilder;
