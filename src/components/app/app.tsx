import { StrictMode, FC } from "react";
import { hot } from "react-hot-loader/root";

import styles from "./styles.scss";

const App: FC = () => (
  <StrictMode>
    <div className={styles.app}>Hello from React!</div>
  </StrictMode>
);

export default hot(App);
