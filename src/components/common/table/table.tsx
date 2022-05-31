import { FC, PropsWithChildren } from "react";
import classnames from "classnames";

import styles from "./styles.scss";

interface Props {
  readonly className?: string;
}

const Table: FC<PropsWithChildren<Props>> = ({ children, className = "" }) => (
  <div className={classnames(styles.table, className)}>{children}</div>
);

export default Table;
