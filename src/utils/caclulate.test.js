import calculate from "./calculate";

describe("calculate", () => {
  it("should return result if value is empty", () => {
    const result = calculate({ result: 2, operation: "+", value: "" });
    expect(result).toEqual(2);
  });

  it("should add result and value", () => {
    const result = calculate({ result: 2, operation: "+", value: 1 });
    expect(result).toEqual(3);
  });

  it("should subtract result and value", () => {
    const result = calculate({ result: 2, operation: "-", value: 1 });
    expect(result).toEqual(1);
  });

  it("should multiply result and value", () => {
    const result = calculate({ result: 2, operation: "*", value: 2 });
    expect(result).toEqual(4);
  });

  it("should divide result and value", () => {
    const result = calculate({ result: 4, operation: "/", value: 2 });
    expect(result).toEqual(2);
  });

  it("should return value", () => {
    const result = calculate({ operation: "=", value: 2 });
    expect(result).toEqual(2);
  });

  it("should throw error if operation does not exist", () => {
    expect(() => calculate({ result: 0, operation: "%", value: 2 })).toThrow();
  });
});
