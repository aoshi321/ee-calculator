import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Should render App without errors", async () => {
    render(<App />);
  });
});
