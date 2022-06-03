import { FC, useEffect, useState } from "react";

import { Table, Row, Cell } from "../../components/common/table";
import Switch from "../../components/common/switch";
import { Option } from "../../components/common/switch/types";
import Notification from "../../components/common/notification/notification";
import Header from "../../components/common/header";

import useFetch from "../../hooks/use-fetch";
import PaginationResponse from "../../models/common/pagination-response";
import LaunchBase from "../../models/launches/launch-base";
import {
  filterOptions,
  FilterOption,
  LaunchFilters
} from "../../constants/launch-filters";
import config from "../../config";

import styles from "./styles.scss";
import Image from "../../components/common/image";
import RocketIcon from "../../components/common/icons/rocket-icon";
import useDebounce from "../../hooks/use-debounce";
import Input from "../../components/common/input/input";

const DEFAULT_FILTER: FilterOption = filterOptions[0];

const initialBody = {
  options: {
    page: 1,
    limit: 10
  }
};

const Launches: FC = () => {
  const [filter, setFilter] = useState<FilterOption>(DEFAULT_FILTER);
  const [search, setSearch] = useState<string>("");
  const debouncedSearchTerm = useDebounce<string>(search, 500);

  const { data, loading, error, updateBody } = useFetch<
    PaginationResponse<LaunchBase>
  >(`${config.apiUrl}/launches/query`, undefined, initialBody);

  const handleChangeSearch = (value: string) => {
    setSearch(value);
  };

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
        return;
      }
      case LaunchFilters.SUCCESSFUL: {
        updateBody({
          ...initialBody,
          query: {
            success: true
          }
        });
        return;
      }
      case LaunchFilters.FAILED: {
        updateBody({
          ...initialBody,
          query: {
            success: false
          }
        });
        return;
      }
      case LaunchFilters.FUTURE: {
        updateBody({
          ...initialBody,
          query: {
            upcoming: true
          }
        });
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

  return (
    <div className={styles.dashboard}>
      <Header text="spaceX monitoring" />
      <section className={styles.filters}>
        <Switch
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
      {error && <Notification type="error" text="Some error occurred." />}
      {loading && <Notification type="info" text="Loading..." />}
      <Table className={styles.table}>
        {data && data.docs && data.docs.length > 0 ? (
          data.docs.map((item: LaunchBase) => (
            <Row key={item.id} className={styles.row}>
              <Cell className={styles.cell} grow>
                <Image
                  imageUrl={item.links.patch.small}
                  placeholder={
                    <RocketIcon className={styles.imagePlaceholder} />
                  }
                  alternativeText={item.name}
                />
              </Cell>
              <Cell className={styles.cell} grow>
                {item.name}
              </Cell>
              <Cell className={styles.cell} grow>
                {item.success ? "SUCCESS" : "FAILED"}
              </Cell>
            </Row>
          ))
        ) : (
          <Notification type="warning" text="No available data." />
        )}
      </Table>
    </div>
  );
};

export default Launches;
