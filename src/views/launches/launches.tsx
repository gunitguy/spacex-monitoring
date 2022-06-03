import { FC, useEffect, useState } from "react";

import Switch from "../../components/common/switch";
import { Option } from "../../components/common/switch/types";
import Notification, {
  NotificationType
} from "../../components/common/notification";
import Header from "../../components/common/header";
import Input from "../../components/common/input/input";

import useDebounce from "../../hooks/use-debounce";
import useElementVisibility from "../../hooks/use-elelemnt-visibility";
import useFetch from "../../hooks/use-fetch";

import PaginationResponse from "../../models/common/pagination-response";
import LaunchBase from "../../models/launches/launch-base";

import {
  filterOptions,
  FilterOption,
  LaunchFilters
} from "../../constants/launch-filters";
import DataGrid from "./data-grid/data-grid";

import config from "../../config";

import styles from "./styles.scss";

type NotificationObject = {
  text: string;
  type: NotificationType;
};

const DEFAULT_FILTER: FilterOption = filterOptions[0];

const initialBody = {
  options: {
    page: 1,
    limit: config.rowsLimit
  }
};

const Launches: FC = () => {
  const [filter, setFilter] = useState<FilterOption>(DEFAULT_FILTER);
  const [search, setSearch] = useState<string>("");
  const [query, setQuery] = useState({});
  const [launches, setLaunches] = useState<Array<LaunchBase>>([]);

  const debouncedSearchTerm = useDebounce<string>(search, 500);
  const { isVisible, ref } = useElementVisibility();

  const { data, loading, error, updateBody } = useFetch<
    PaginationResponse<LaunchBase>
  >(`${config.apiUrl}/launches/query`, undefined, initialBody);

  const handleChangeSearch = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    if (data?.docs && data?.page > 1) {
      setLaunches([...launches, ...data.docs]);
    }

    if (data?.docs && data?.page === 1) {
      setLaunches([...data.docs]);
    }
  }, [data]);

  useEffect(() => {
    updateBody({
      ...initialBody,
      query,
      options: {
        ...initialBody.options,
        page: data?.nextPage
      }
    });
  }, [isVisible]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      updateBody({
        ...initialBody,
        query: {
          $text: {
            $search: debouncedSearchTerm
          }
        }
      });
    } else {
      updateBody({ ...initialBody });
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    switch (filter.value) {
      case LaunchFilters.ALL: {
        updateBody({ ...initialBody });
        setQuery({});
        return;
      }
      case LaunchFilters.SUCCESSFUL: {
        const newQuery = {
          success: true
        };

        updateBody({
          ...initialBody,
          query: newQuery
        });
        setQuery(newQuery);
        return;
      }
      case LaunchFilters.FAILED: {
        const newQuery = {
          success: false
        };

        updateBody({
          ...initialBody,
          query: newQuery
        });
        setQuery(newQuery);
        return;
      }
      case LaunchFilters.FUTURE: {
        const newQuery = {
          upcoming: true
        };

        updateBody({
          ...initialBody,
          query: {
            upcoming: true
          }
        });
        setQuery(newQuery);
        return;
      }
      default: {
        throw new Error("Unhandled filter.");
      }
    }
  }, [filter]);

  const handleChangeFilter = (option: Option) => {
    setFilter(option);
  };

  let notification: Nullable<NotificationObject> = null;

  if (loading) {
    notification = {
      text: "Loading...",
      type: "info"
    };
  } else if (error) {
    notification = {
      text: "Some error occurred.",
      type: "error"
    };
  } else if (launches.length === 0) {
    notification = {
      text: "No data available.",
      type: "warning"
    };
  }

  return (
    <div className={styles.dashboard}>
      <Header text="spaceX monitoring" />
      <section className={styles.filters}>
        <Switch
          className={styles.filtersSwitch}
          options={filterOptions}
          onChange={handleChangeFilter}
          selected={filter}
        />
        <Input
          className={styles.searchInput}
          value={search}
          onChange={handleChangeSearch}
          placeholder="Search..."
        />
      </section>
      {notification && (
        <Notification type={notification.type} text={notification.text} />
      )}
      <DataGrid data={launches} lastElementRef={ref} />
    </div>
  );
};

export default Launches;
