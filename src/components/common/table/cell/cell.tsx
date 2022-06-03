import { FC, PropsWithChildren } from "react";
import classnames from "classnames";

import styles from "./styles.scss";

interface Props {
  readonly grow?: boolean;
  readonly className?: string;
}

const Cell: FC<PropsWithChildren<Props>> = ({
  children,
  className = "",
  grow = false
}) => (
  <div
    className={classnames(
      styles.cell,
      {
        [styles.grow]: grow
      },
      className
    )}
  >
    {children}
  </div>
);

export default Cell;
