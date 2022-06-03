enum LaunchFilters {
  ALL = "all",
  SUCCESSFUL = "successful",
  FAILED = "failed",
  FUTURE = "future"
}

export type FilterOption = {
  value: LaunchFilters;
  name: string;
};

const filterOptions: Array<FilterOption> = [
  { value: LaunchFilters.ALL, name: "All" },
  { value: LaunchFilters.SUCCESSFUL, name: "Successful" },
  { value: LaunchFilters.FAILED, name: "Failed" },
  { value: LaunchFilters.FUTURE, name: "Future" }
];

export { LaunchFilters, filterOptions };

export default null;
