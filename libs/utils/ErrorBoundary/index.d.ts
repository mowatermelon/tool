import * as React from 'react';
interface IProps {
    children?: React.ReactNode;
    Fallback?: React.ComponentType<any>;
    onError?: Function;
    errorState?: boolean;
}
interface IErrorInfo {
    componentStack: string;
}
interface IState {
    error?: Error | null;
    info?: IErrorInfo;
}
declare class ErrorBoundary extends React.Component<IProps, IState> {
    static defaultProps: IProps;
    constructor(props: any);
    componentDidCatch(error: Error, info: IErrorInfo): void;
    render(): {} | null;
}
export default ErrorBoundary;
