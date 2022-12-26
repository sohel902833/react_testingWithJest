import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("Renders Correctly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
