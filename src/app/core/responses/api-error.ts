export interface ApiError {
  statusCode?: number;
  type?: ApiErrorType;
  message?: string;
  errors?: Record<string, string[]>;
}

export enum ApiErrorType {
  err1 = 'Unauthorized',
  err2 = 'Forbidden',
  err3 = 'Not Found'
}
