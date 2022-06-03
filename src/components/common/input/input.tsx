import { FormEvent, FC } from "react";

import classnames from "classnames";
import styles from "./styles.scss";

interface Props {
  readonly className?: string;
  readonly placeholder?: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
}

const Input: FC<Props> = ({
  onChange,
  className = "",
  placeholder = "",
  value
}) => {
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <input
      className={classnames(styles.input, className)}
      type="text"
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
