import { render, screen, fireEvent } from "@testing-library/react";
import ToggleButton from "./ToggleButton";

test("changes text after click", () => {
  render(<ToggleButton />);
  const buttonElement = screen.getByText(/clique para alterar/i);
  expect(buttonElement).toBeInTheDocument();
  fireEvent.click(buttonElement);
  const updatedButtonElement = screen.getByText(/texto alterado/i);
  expect(updatedButtonElement).toBeInTheDocument();
});
