import { FC, RefObject } from "react";
import { nanoid } from "nanoid";

import LaunchBase from "../../../models/launches/launch-base";
import { Cell, Row, Table } from "../../../components/common/table";
import Image from "../../../components/common/image";
import RocketIcon from "../../../components/common/icons/rocket-icon";

import styles from "./styles.scss";

interface Props {
  readonly data: Array<LaunchBase>;
  readonly lastElementRef: RefObject<Nullable<Element>>;
}

const DataGrid: FC<Props> = ({ data = [], lastElementRef = null }) => {
  const dataLength: number = data.length;

  const tableContent =
    dataLength > 0
      ? data.map((item: LaunchBase, index: number) => {
          const isLastElement: boolean = dataLength === index + 1;
          const rowContent = (
            <>
              <Cell className={styles.cell}>
                <Image
                  imageUrl={item.links.patch.small}
                  placeholder={
                    <RocketIcon className={styles.imagePlaceholder} />
                  }
                  alternativeText={item.name}
                />
              </Cell>
              <Cell className={styles.cell}>{item.name}</Cell>
              <Cell className={styles.cell} grow>
                {item.success ? "SUCCESS" : "FAILED"}
              </Cell>
            </>
          );

          const basicRowProps = {
            key: nanoid(),
            className: styles.row
          };

          return isLastElement ? (
            <Row
              {...basicRowProps}
              // @ts-ignore
              rowRef={lastElementRef}
            >
              {rowContent}
            </Row>
          ) : (
            <Row {...basicRowProps}>{rowContent}</Row>
          );
        })
      : null;

  if (!tableContent) {
    return null;
  }

  return <Table className={styles.table}>{tableContent}</Table>;
};

export default DataGrid;
