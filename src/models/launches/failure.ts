export default interface Failure {
  readonly time: number;
  readonly altitude: Nullable<number>;
  readonly reason: string;
}
