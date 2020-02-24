/* TypeScript file generated from ExampleReason.re by genType. */
/* eslint-disable import/first */


// tslint:disable-next-line:no-var-requires
const Curry = require('bs-platform/lib/es6/curry.js');

// tslint:disable-next-line:no-var-requires
const ExampleReasonBS = require('./ExampleReason.bs');

export const make: <T1>(_1:{ readonly name: string }, _2:T1) => JSX.Element = function <T1>(Arg1: any, Arg2: any) {
  const result = Curry._2(ExampleReasonBS.make, Arg1, Arg2);
  return result
};
