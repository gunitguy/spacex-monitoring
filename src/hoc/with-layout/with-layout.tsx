import { ReactElement } from "react";

import styles from "./styles.scss";

const withLayout = (children: ReactElement): JSX.Element => (
  <div className={styles.layout}>{children}</div>
);

export default withLayout;
