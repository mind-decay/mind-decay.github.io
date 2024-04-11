import { apiErrorsHandler } from './../utils/api/apiErrorsHandler';

import { Nullable } from './helpers';

export type urlParams = Record<string, string | number | boolean>;

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type RequestBody = Nullable<Record<string, unknown>>;

export type ErrorType = ReturnType<typeof apiErrorsHandler>;

export const isErrorType = (err: unknown): err is ErrorType => {
  return typeof err === 'string' && err.length > 0;
};
