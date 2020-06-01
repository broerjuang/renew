/* TypeScript file generated from Input.re by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const InputBS = require('./Input.bs');

import {Style_t as ReactNative_Style_t} from '../../components/shims/ReactNative.shim';

// tslint:disable-next-line:interface-over-type-literal
export type Props<T1,T2> = {
  readonly component?: JSX.Element; 
  readonly onBlur?: (_1:T2) => void; 
  readonly onFocus?: (_1:T1) => void; 
  readonly style?: ReactNative_Style_t
};

export const $$default: React.ComponentType<{
  readonly component?: JSX.Element; 
  readonly onBlur?: (_1:any) => void; 
  readonly onFocus?: (_1:any) => void; 
  readonly style?: ReactNative_Style_t
}> = InputBS.default;

export default $$default;
