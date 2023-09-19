export type Overwrite<T, NewT> = Omit<T, keyof NewT> & NewT;

export enum HttpMethod {
  GET = "get",
  POST = "post",
  PATCH = "patch",
  PUT = "put",
  DELETE = "delete",
}
