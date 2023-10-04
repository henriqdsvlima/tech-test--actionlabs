export interface CreateResponse<T> {
  data: T;
  message: string;
}
export interface ReadResponse<T> {
  data: T;
}

export interface UpdateResponse<T> {
  data: T;
  message: string;
}

export interface DeleteResponse {
  message: string;
}
