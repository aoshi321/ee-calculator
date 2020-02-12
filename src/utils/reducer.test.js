import reducer, { initialState } from "./reducer";

describe("reducer", () => {
  it("should handle VALUE", () => {
    const state = reducer(initialState, { type: "VALUE", value: "1" });
    expect(state).toEqual({
      operation: "=",
      result: 0,
      value: "1"
    });
  });

  it("should handle OPERATION", () => {
    const state = reducer(initialState, { type: "OPERATION", value: "+" });
    expect(state).toEqual({
      operation: "+",
      result: 0,
      value: ""
    });
  });

  it("should handle CLEAR", () => {
    const state = reducer({}, { type: "CLEAR" });
    expect(state).toEqual(initialState);
  });
});
