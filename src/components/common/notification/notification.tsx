import { FC } from "react";
import classnames from "classnames";

import styles from "./styles.scss";

interface Props {
  readonly className?: string;
  readonly type?: "info" | "error" | "warning" | "success";
  readonly text: string;
}

const Notification: FC<Props> = ({ text, type = "info", className = "" }) => (
  <div className={classnames(styles.notification, styles[type], className)}>
    {text}
  </div>
);

export default Notification;
