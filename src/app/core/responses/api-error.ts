export interface ApiError {
  statusCode?: number;
  type?: ApiErrorType;
  message?: string;
  errors?: Record<string, string[]>;
}

export enum ApiErrorType {
 err1 = 'type api error here'
}
