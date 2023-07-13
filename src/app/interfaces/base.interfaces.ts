export interface IBaseFilterQuery {
  page?: number;
  take?: number;
  searchTerm?: string;
}
export interface IApiBaseResponse<T> {
  success: boolean;
  statusCode: number;
  total: number;
  page: number;
  payload: T;
}

export interface ILoginCredential {
  identifier: string;
  password: string;
}
