interface IProps {
    componentStack: string;
    error: Error;
}
declare const ErrorBoundaryFallback: ({ componentStack, error }: IProps) => JSX.Element;
export default ErrorBoundaryFallback;
