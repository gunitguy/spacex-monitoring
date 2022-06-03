import { render, screen } from "@testing-library/react";

import Header from "./header";

describe("Header", () => {
  it("should display header with passed text", () => {
    render(<Header text="Test text" />);

    expect(screen.getByText("Test text")).toBeInTheDocument();
  });
});
