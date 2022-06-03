import { FC, PropsWithChildren, RefObject } from "react";
import classnames from "classnames";

import styles from "./styles.scss";

interface Props {
  readonly className?: string;
  readonly rowRef?: RefObject<Nullable<Element>>;
}

const Row: FC<PropsWithChildren<Props>> = ({
  children,
  className = "",
  rowRef
}) => (
  // @ts-ignore
  <div ref={rowRef} className={classnames(styles.row, className)}>
    {children}
  </div>
);

export default Row;
