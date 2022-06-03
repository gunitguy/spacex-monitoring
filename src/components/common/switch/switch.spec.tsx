import { render, screen, fireEvent } from "@testing-library/react";

import Switch from "./switch";

jest.mock("nanoid", () => ({
  nanoid: jest.fn(() => Math.random())
}));

describe("Switch", () => {
  const options = [
    {
      value: "test1",
      name: "test1"
    },
    {
      value: "test2",
      name: "test2"
    }
  ];

  it("should display proper number of switch options", () => {
    render(
      <Switch selected={options[0]} options={options} onChange={() => {}} />
    );

    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("should have active class on selected option", () => {
    const selected = options[0];

    render(
      <Switch selected={selected} options={options} onChange={() => {}} />
    );

    expect(screen.getByText("test1")).toHaveClass("selected");
  });

  it("should execute onChange with proper object after click", () => {
    const selected = options[0];
    const handleClick = jest.fn();
    render(
      <Switch selected={selected} options={options} onChange={handleClick} />
    );

    fireEvent.click(screen.getByText("test2"));

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toBeCalledWith(options[1]);
  });
});
