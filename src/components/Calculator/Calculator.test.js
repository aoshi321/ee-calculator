import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Calculator from "./";

const setup = () => {
  const utils = render(<Calculator />);
  const clickDigit = digits => {
    digits.split("").forEach(digit => {
      fireEvent.click(utils.getByText(digit));
    });
  };
  return {
    clickDigit,
    displayElement: utils.getByTestId("display-input"),
    ...utils
  };
};

describe("Calculator", () => {
  it("Should display 0 as default", async () => {
    const { displayElement } = setup();
    expect(displayElement).toHaveValue("0");
  });

  it("Should add two single digits", async () => {
    const { clickDigit, displayElement } = setup();
    clickDigit("2");
    clickDigit("+");
    clickDigit("5");
    clickDigit("=");
    expect(displayElement).toHaveValue("7");
  });

  it("Should add two multiple  digits", async () => {
    const { clickDigit, displayElement } = setup();
    clickDigit("21");
    clickDigit("+");
    clickDigit("100");
    clickDigit("=");
    expect(displayElement).toHaveValue("121");
  });

  it("Should subtract two single digits", async () => {
    const { clickDigit, displayElement } = setup();
    clickDigit("5");
    clickDigit("-");
    clickDigit("2");
    clickDigit("=");
    expect(displayElement).toHaveValue("3");
  });

  it("Should subtract two multiple  digits", async () => {
    const { clickDigit, displayElement } = setup();
    clickDigit("111");
    clickDigit("-");
    clickDigit("98");
    clickDigit("=");
    expect(displayElement).toHaveValue("13");
  });

  it("Should multiply two single digits", async () => {
    const { clickDigit, displayElement } = setup();
    clickDigit("2");
    clickDigit("*");
    clickDigit("5");
    clickDigit("=");
    expect(displayElement).toHaveValue("10");
  });

  it("Should multiply two multiple  digits", async () => {
    const { clickDigit, displayElement } = setup();
    clickDigit("21");
    clickDigit("*");
    clickDigit("100");
    clickDigit("=");
    expect(displayElement).toHaveValue("2100");
  });

  it("Should divide two single digits", async () => {
    const { clickDigit, displayElement } = setup();
    clickDigit("8");
    clickDigit("/");
    clickDigit("2");
    clickDigit("=");
    expect(displayElement).toHaveValue("4");
  });

  it("Should divide two multiple  digits", async () => {
    const { clickDigit, displayElement } = setup();
    clickDigit("120");
    clickDigit("/");
    clickDigit("10");
    clickDigit("=");
    expect(displayElement).toHaveValue("12");
  });

  it("Should return a negative result", async () => {
    const { clickDigit, displayElement } = setup();
    clickDigit("2");
    clickDigit("-");
    clickDigit("3");
    clickDigit("=");
    expect(displayElement).toHaveValue("-1");
  });

  it("Should clear the display if digits entered", async () => {
    const { clickDigit, displayElement } = setup();
    clickDigit("123");
    expect(displayElement).toHaveValue("123");
    clickDigit("C");
    expect(displayElement).toHaveValue("0");
  });
});
