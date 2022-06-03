import { FC, PropsWithChildren } from "react";
import classnames from "classnames";

import styles from "./styles.scss";

interface Props {
  readonly className?: string;
}

const Row: FC<PropsWithChildren<Props>> = ({ children, className = "" }) => (
  <div className={classnames(styles.row, className)}>{children}</div>
);

export default Row;
