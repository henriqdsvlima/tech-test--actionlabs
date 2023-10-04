// api.models.ts
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiListResponse<T> {
  data: T[];
  success: boolean;
  message?: string;
  pagination?: Pagination;
}

export interface Pagination {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
}
