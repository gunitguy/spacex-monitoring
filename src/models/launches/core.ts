export default interface Core {
  readonly core: Nullable<string>;
  readonly flight: Nullable<number>;
  readonly gridfins: Nullable<boolean>;
  readonly landing_attempt: Nullable<boolean>;
  readonly landing_success: Nullable<boolean>;
  readonly landing_type: Nullable<string>;
  readonly landpad: Nullable<string>;
  readonly legs: Nullable<boolean>;
  readonly reused: Nullable<boolean>;
}
