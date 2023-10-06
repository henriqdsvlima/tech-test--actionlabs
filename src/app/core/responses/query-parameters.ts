export interface QueryParameters {
  page?: number;
  limit?: number;
  search?: string;
  rateLimitExceeded?: string
  [key: string]: any;
}
