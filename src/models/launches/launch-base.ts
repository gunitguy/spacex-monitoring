import Core from "./core";
import Failure from "./failure";
import Fairings from "./fairings";
import Links from "./links";

export default interface LaunchBase {
  readonly auto_update: boolean;
  readonly capsules: Array<string>;
  readonly cores: Array<Core>;
  readonly crew: Array<string>;
  readonly date_local: string;
  readonly date_precision: string;
  readonly date_unix: number;
  readonly date_utc: string;
  readonly details: string;
  readonly failures: Array<Failure>;
  readonly fairings: Fairings;
  readonly flight_number: number;
  readonly id: string;
  readonly launch_library_id: Nullable<string>;
  readonly launchpad: string;
  readonly links: Links;
  readonly name: string;
  readonly net: boolean;
  readonly payloads: Array<string>;
  readonly rocket: Nullable<string>;
  readonly ships: Array<string>;
  readonly static_fire_date_unix: Nullable<number>;
  readonly static_fire_date_utc: Nullable<string>;
  readonly success: Nullable<boolean>;
  readonly upcoming: boolean;
  readonly window: Nullable<number>;
}
