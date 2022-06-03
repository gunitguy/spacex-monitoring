import { FC } from "react";
import classnames from "classnames";
import { nanoid } from "nanoid";

import SwitchOption from "./switch-option";
import { Option } from "./types";

import styles from "./styles.scss";

interface Props {
  readonly className?: string;
  readonly options: Array<Option>;
  readonly selected: Option;
  readonly onChange: (option: Option) => void;
}

const Switch: FC<Props> = ({ className = "", options, onChange, selected }) => {
  const handleChange = (option: Option) => {
    onChange(option);
  };

  const mappedOptions = options.map((option) => (
    <SwitchOption
      key={nanoid()}
      option={option}
      onChange={handleChange}
      selected={option.value === selected.value}
    />
  ));

  return (
    <div className={classnames(styles.switch, className)}>{mappedOptions}</div>
  );
};

export default Switch;
