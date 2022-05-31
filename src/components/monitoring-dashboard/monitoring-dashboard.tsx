import { FC } from "react";

import Row from "../common/row";
import Cell from "../common/cell";
import Table from "../common/table";
import useFetch from "../../hooks/use-fetch";

import styles from "./styles.scss";

const API_URL = "https://api.spacexdata.com";

const MonitoringDashboard: FC = () => {
  const { data, loading, error } = useFetch<any>(`${API_URL}/v5/launches`);

  return (
    <div className={styles.dashboard}>
      <header className={styles.title}>spaceX monitoring</header>
      {error && <div>Some error occurred.</div>}
      {loading && <div>Loading...</div>}
      <Table className={styles.table}>
        {data && data.length > 0 ? (
          data.map((item: any) => (
            <Row key={item.id} className={styles.row}>
              <Cell className={styles.cell} grow>
                {item.id}
              </Cell>
              <Cell className={styles.cell} grow>
                <img width={40} src={item.links.patch.small} />
              </Cell>
              <Cell className={styles.cell} grow>
                {item.rocket}
              </Cell>
              <Cell className={styles.cell} grow>
                {item.name}
              </Cell>
            </Row>
          ))
        ) : (
          <div>No Data</div>
        )}
      </Table>
    </div>
  );
};

export default MonitoringDashboard;
