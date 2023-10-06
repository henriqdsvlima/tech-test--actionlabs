export interface ApiError {
  statusCode?: number;
  type?: ApiErrorType;
  message?: string;
  errors?: Record<string, string[]>;
}

export enum ApiErrorType {
  Unauthorized = 'Unauthorized',
  Forbidden = 'Forbidden',
  NotFound = 'NotFound',
  GenericError = 'GenericError',
}
