import { FC } from "react";
import classnames from "classnames";

import { Option } from "../types";
import styles from "./styles.scss";

interface Props {
  readonly className?: string;
  readonly option: Option;
  readonly onChange: (option: Option) => void;
  readonly selected?: boolean;
}

const SwitchOption: FC<Props> = ({
  className = "",
  selected = false,
  option,
  onChange
}) => {
  const handleClick = () => {
    if (!option.disabled) {
      onChange(option);
    }
  };

  return (
    <div
      className={classnames(
        styles.switchOption,
        {
          [styles.selected]: selected,
          [styles.disabled]: option.disabled
        },
        className
      )}
      onClick={handleClick}
      role="button"
    >
      {option.name}
    </div>
  );
};

export default SwitchOption;
