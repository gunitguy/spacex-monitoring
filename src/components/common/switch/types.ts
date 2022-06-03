import { FilterOption } from "../../../constants/launch-filters";

export type Option = FilterOption & {
  disabled?: boolean;
};
