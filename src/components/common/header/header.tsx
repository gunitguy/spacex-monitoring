import { FC } from "react";
import classnames from "classnames";

import styles from "./styles.scss";

interface Props {
  readonly className?: string;
  readonly text: string;
}

const Header: FC<Props> = ({ className = "", text }) => (
  <div className={classnames(styles.header, className)}>{text}</div>
);

export default Header;
