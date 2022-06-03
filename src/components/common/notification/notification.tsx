import { FC } from "react";
import classnames from "classnames";

import styles from "./styles.scss";

export type NotificationType = "info" | "error" | "warning" | "success";

interface Props {
  readonly className?: string;
  readonly type?: NotificationType;
  readonly text: string;
}

const Notification: FC<Props> = ({ text, type = "info", className = "" }) => (
  <div className={classnames(styles.notification, styles[type], className)}>
    {text}
  </div>
);

export default Notification;
