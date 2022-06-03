export default interface PaginationResponse<T> {
  readonly docs: Array<T>;
  readonly hasNextPage: boolean;
  readonly hasPrevPage: boolean;
  readonly limit: number;
  readonly nextPage: number;
  readonly page: number;
  readonly pagingCounter: number;
  readonly prevPage: Nullable<number>;
  readonly totalDocs: number;
  readonly totalPages: number;
}
