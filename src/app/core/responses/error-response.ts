export interface ApiError {
  statusCode: number;
  message: string;
  errors?: Record<string, string[]>;
}
