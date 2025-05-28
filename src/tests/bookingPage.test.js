import React from "react";

import { render, screen } from "@testing-library/react";
import BookingPage from "../components/BookingPage";

test("renders BookingPage with form initially", () => {
  render(<BookingPage />);
  expect(screen.getByText(/book a table at little lemon/i)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /find a table/i })
  ).toBeInTheDocument();
});
