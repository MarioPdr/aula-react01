import React from "react";
import { render, screen } from "@testing-library/react";
import TesteButton from "./TesteButton";

test("renders button with the correct label", () => {
  render(<TesteButton label="Clique Aqui" />);
  const buttonElement = screen.getByText(/clique aqui/i);
  expect(buttonElement).toBeInTheDocument();
});
