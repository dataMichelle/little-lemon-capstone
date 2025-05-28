// src/tests/html5validation.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from "../components/BookingPage";

beforeEach(() => {
  render(<BookingPage />);

  // Step 1: fill basic info and find table
  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: "2025-12-25" },
  });
  fireEvent.change(screen.getByPlaceholderText(/guests/i), {
    target: { value: 2 },
  });
  fireEvent.click(screen.getByRole("button", { name: /find a table/i }));

  // Step 2: select a time
  const timeBtn = screen
    .getAllByRole("button")
    .find((btn) => /pm/i.test(btn.textContent));
  if (!timeBtn) throw new Error("No PM time found");
  fireEvent.click(timeBtn);
});

describe("HTML5 input attributes", () => {
  it("name input should be required and of type text", () => {
    const nameInput = screen.getByPlaceholderText(/full name/i);
    expect(nameInput).toBeRequired();
    expect(nameInput).toHaveAttribute("type", "text");
  });

  it("phone input should be required and follow a pattern", () => {
    const phoneInput = screen.getByPlaceholderText(/phone/i);
    expect(phoneInput).toBeRequired();
    expect(phoneInput).toHaveAttribute("type", "tel");
    expect(phoneInput).toHaveAttribute("pattern", "[0-9]{10}");
  });

  it("email input should be optional but of type email", () => {
    const emailInput = screen.getByPlaceholderText(/email/i);
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).not.toBeRequired();
  });
});
