export const logger = console;
export const { stringify } = JSON;
// export const parse = (str: string) => JSON.parse(JSON.stringify(str));
export const parse = (str: string = '') => JSON.parse(str.replace(/\'/g, '"'));
export const tryCatch = (fnCallBack: (...param: any) => string | void) => {
  return (...param: any) => {
    let res = {};
    try {
      res = fnCallBack(...param) || '';
    } catch (error) {
      console.log(error);
    }
    return res;
  };
};

export const BaseExecFn = (dealFnStr: string) => {
  return dealFnStr ? new Function(dealFnStr) : () => '';
};
export default {};
