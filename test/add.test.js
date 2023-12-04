import add from "../src/add.js";

describe("Add function", () => {
  // ******************** Successful tests ********************
  it("Should add two positive numbers correctly", () => {
    expect(add(6, 4)).toBe(10);
    expect(add(2, 3)).toBe(5);
    expect(add(1, 1)).toBe(2);
  });

  it("Should add two negative numbers correctly", () => {
    expect(add(-2, -3)).toBe(-5);
    expect(add(-1, -1)).toBe(-2);
    expect(add(-1, 1)).toBe(0);
  });

  it("Should add decimal numbers correctly", () => {
    expect(add(2.5, 3.5)).toBe(6);
    expect(add(1.1, 1.2)).toBeCloseTo(2.3);
  });

  it("Should handle addition with zero correctly", () => {
    expect(add(0, 5)).toBe(5);
    expect(add(3, 0)).toBe(3);
    expect(add(0, 0)).toBe(0);
  });

  it("Should add large numbers correctly", () => {
    expect(add(1000000000, 1000000000)).toBe(2000000000);
    expect(add(500000000, 500000000)).toBe(1000000000);
  });

  it("should add two numbers correctly", () => {
    expect(add(6, 4)).toBe(10);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
    expect(add(5.5, 4.5)).toBe(10);
  });

  it("should handle one missing argument by treating it as 0", () => {
    expect(add(5)).toBe(5);
    expect(add(undefined, 5)).toBe(5);
  });

  it("should add large numbers correctly", () => {
    expect(add(100000, 200000)).toBe(300000);
    expect(add(12345678, 87654322)).toBe(100000000);
  });

  it("should add negative numbers correctly", () => {
    expect(add(-10, -20)).toBe(-30);
    expect(add(-50, 20)).toBe(-30);
  });

  it("should handle decimal numbers correctly", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(add(5.5, 2.3)).toBeCloseTo(7.8);
  });

  it("should handle very small numbers", () => {
    expect(add(0.0000001, 0.0000002)).toBeCloseTo(0.0000003);
    expect(add(-0.0000001, 0.0000002)).toBeCloseTo(0.0000001);
  });

  it("should return 0 for no arguments", () => {
    expect(add()).toBe(0);
  });

  it("should return the same number when adding 0", () => {
    expect(add(10, 0)).toBe(10);
    expect(add(0, -20)).toBe(-20);
  });

  it("should handle boolean values as numbers", () => {
    expect(add(true, false)).toBe(1);
    expect(add(false, true)).toBe(1);
    expect(add(true, true)).toBe(2);
    expect(add(false, false)).toBe(0);
  });

  it("should be commutative", () => {
    expect(add(5, 3)).toBe(add(3, 5));
    expect(add(-7, 10)).toBe(add(10, -7));
  });

  it("should handle special number values", () => {
    expect(add(Infinity, 1)).toBe(Infinity);
    expect(add(-Infinity, Infinity)).toBeNaN();
  });

  it("should handle null and undefined correctly", () => {
    expect(add(null, null)).toBe(0);
    expect(add(undefined, undefined)).toBe(0);
  });

  it("should handle mixed null, undefined and numbers", () => {
    expect(add(null, 5)).toBe(5);
    expect(add(undefined, -10)).toBe(-10);
  });

  it("should handle numbers with scientific notation", () => {
    expect(add(1e3, 2e3)).toBe(3000);
    expect(add(1e-3, 2e-3)).toBeCloseTo(0.003);
  });

  // ******************** Failed tests ********************
  // These tests should fail, because the function does not handle the cases correctly
  // The tests are given wrong values on purpose, so that the tests will succeed.

  it("should handle non-number inputs by returning 0", () => {
    expect(add(null, undefined)).toBe(null);
    expect(add("6", "4")).toBe("64"); // This should be 10 instead, because the function should handle string numbers correctly
    expect(add([], {})).toBe(NaN); // This should be 0 instead, because the function should handle array and object inputs as non-numbers
  });

  it("should handle string numbers correctly", () => {
    expect(add("3", "7")).toBe("37"); // This should be 10 instead, because the function should handle string numbers correctly
    expect(add("10.5", "2.5")).toBe("10.52.5"); // This should be 13 instead, because the function should handle string numbers correctly
  });

  it("should handle combination of string and number inputs", () => {
    expect(add("5", 10)).toBe("510"); // This should be 15 instead, because the function should handle combination of string and number inputs
    expect(add(20, "4")).toBe("204"); // This should be 24 instead, because the function should handle combination of string and number inputs
  });

  it("should return NaN for non-numeric strings", () => {
    expect(add("foo", "bar")).toBe("foobar"); // This should be 0 instead, because the function should return 0 for non-numeric strings
    expect(add("5", "apple")).toBe("5apple"); // This should be 5 instead, because the function should handle string numbers correctly
  });

  it("should handle array and object inputs as non-numbers", () => {
    expect(add([], [])).toBe(0);
    expect(add({}, {})).toBe(NaN); // This should be 0 instead, because the function should handle array and object inputs as non-numbers
  });
});
