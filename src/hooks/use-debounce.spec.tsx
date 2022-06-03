import { useState, FC } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import useDebounce from "./use-debounce";

jest.useFakeTimers();

const mockValue = "test_value";
const anotherMockValue = "another_test_value";

const MockComponent: FC = (): JSX.Element => {
  const [value, setValue] = useState(mockValue);
  const debouncedValue = useDebounce(value, 100);

  const handleChange = (): void => {
    setValue(anotherMockValue);
  };

  return <div onClick={handleChange}>{debouncedValue}</div>;
};

describe("useDebounce hook", () => {
  it("should return debounced value", async () => {
    render(<MockComponent />);

    expect(screen.getByText(mockValue)).toBeInTheDocument();

    fireEvent.click(screen.getByText(mockValue));

    await waitFor(() => {
      expect(screen.getByText(anotherMockValue)).toBeInTheDocument();
    });
  });
});
