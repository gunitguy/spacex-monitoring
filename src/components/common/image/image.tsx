import { FC, ReactNode } from "react";
import classnames from "classnames";

import styles from "./styles.scss";

interface Props {
  readonly className?: string;
  readonly imageUrl: Nullable<string>;
  readonly placeholder: ReactNode;
  readonly alternativeText: string;
}

const Image: FC<Props> = ({
  className = "",
  imageUrl,
  placeholder,
  alternativeText
}) => (
  <div className={classnames(styles.image, className)}>
    {imageUrl ? <img src={imageUrl} alt={alternativeText} /> : placeholder}
  </div>
);

export default Image;
