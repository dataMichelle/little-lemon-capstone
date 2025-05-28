import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

describe("JavaScript form validation", () => {
  const setupStep3 = async () => {
    const availableTimes = ["18:00", "19:00", "20:00"];
    const unavailableTimes = [];

    render(
      <BookingForm
        dispatch={jest.fn()}
        onSubmitSuccess={jest.fn()}
        availableTimes={availableTimes}
        unavailableTimes={unavailableTimes}
      />
    );

    fireEvent.change(screen.getByLabelText(/date/i), {
      target: { value: "2025-12-25" },
    });
    fireEvent.change(screen.getByPlaceholderText(/guests/i), {
      target: { value: "2" },
    });
    fireEvent.click(screen.getByText(/find a table/i));

    const buttons = await screen.findAllByRole("button");
    const timeBtn = buttons.find((btn) => /pm/i.test(btn.textContent || ""));
    const validBtn =
      timeBtn || buttons.find((btn) => /[0-9]/.test(btn.textContent || ""));

    if (!validBtn) {
      throw new Error("No time button found");
    }

    fireEvent.click(validBtn);
    await screen.findByPlaceholderText(/full name/i);
  };

  it("should disable submit button if name and phone are missing", async () => {
    await setupStep3();
    const submitBtn = screen.getByText(/book the table/i);
    expect(submitBtn).toBeDisabled();
  });

  it("should disable submit button for invalid email", async () => {
    await setupStep3();

    fireEvent.change(screen.getByPlaceholderText(/full name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/phone/i), {
      target: { value: "9876543210" },
    });
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "invalid-email" },
    });

    const submitBtn = screen.getByText(/book the table/i);
    expect(submitBtn).toBeDisabled();
  });

  it("should enable submit button for valid inputs", async () => {
    await setupStep3();

    fireEvent.change(screen.getByPlaceholderText(/full name/i), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/phone/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "jane@example.com" },
    });

    const submitBtn = screen.getByText(/book the table/i);
    expect(submitBtn).toBeEnabled();
  });
});
