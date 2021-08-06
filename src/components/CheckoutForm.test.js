import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  const fNameInput = screen.getByLabelText("First Name:");
  const lNameInput = screen.getByLabelText("Last Name:");
  const addressInput = screen.getByLabelText("Address:");
  const cityInput = screen.getByLabelText("City:");
  const stateInput = screen.getByLabelText("State:");
  const zipInput = screen.getByLabelText("Zip:");
  const submitBtn = screen.getByRole("button");

  userEvent.type(fNameInput, "Marat");
  userEvent.type(lNameInput, "Kotik");
  userEvent.type(addressInput, "101 Stoll St.");
  userEvent.type(cityInput, "Netcong");
  userEvent.type(stateInput, "California");
  userEvent.type(zipInput, "091110");
  userEvent.click(submitBtn);

  const successMessage = screen.getByTestId("successMessage");
  expect(successMessage).toBeInTheDocument();
});
