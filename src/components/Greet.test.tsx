import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("Renders Correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("Renders With The Name", () => {
    render(<Greet name="Sohrab" />);
    const textElement = screen.getByText("Hello Sohrab");
    expect(textElement).toBeInTheDocument();
  });
});
