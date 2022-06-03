export default interface Fairings {
  readonly reused: Nullable<boolean>;
  readonly recovery_attempt: Nullable<boolean>;
  readonly recovered: Nullable<boolean>;
  readonly ships: Array<string>;
}
