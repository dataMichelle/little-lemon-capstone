// src/tests/localStorage.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from "../components/BookingPage";

// Mock localStorage before each test
beforeEach(() => {
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.getItem = jest.fn();
  Storage.prototype.removeItem = jest.fn();
  jest.clearAllMocks();
});

test("writes booking data to localStorage on form submission", () => {
  render(<BookingPage />);

  fireEvent.change(screen.getByLabelText(/date/i), {
    target: { value: "2025-12-25" }, // Future-safe date
  });
  fireEvent.change(screen.getByPlaceholderText(/guests/i), {
    target: { value: 4 },
  });
  fireEvent.click(screen.getByRole("button", { name: /find a table/i }));

  // Select a PM time button
  const timeBtn = screen
    .getAllByRole("button")
    .find((btn) => /pm/i.test(btn.textContent));
  if (!timeBtn) throw new Error("No available PM time button found");
  fireEvent.click(timeBtn);

  fireEvent.change(screen.getByPlaceholderText(/full name/i), {
    target: { value: "Jane Doe" },
  });
  fireEvent.change(screen.getByPlaceholderText(/phone/i), {
    target: { value: "1234567890" },
  });

  fireEvent.click(screen.getByRole("button", { name: /book the table/i }));

  expect(localStorage.setItem).toHaveBeenCalledWith(
    "littleLemonReservation",
    expect.stringContaining("Jane Doe")
  );
});

test("reads booking data from localStorage on page load", () => {
  const mockData = {
    resDate: "2025-12-25",
    resTime: "19:00",
    guests: 2,
    occasion: "Birthday",
    name: "John Doe",
    phone: "9876543210",
    email: "john@example.com",
    comments: "Window seat please",
  };

  Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockData));

  render(<BookingPage />);

  expect(screen.getByText(/john doe/i)).toBeInTheDocument();

  const timeTexts = screen.getAllByText((_, node) =>
    node.textContent?.includes("7:00 PM")
  );
  expect(timeTexts.length).toBeGreaterThan(0);
});
