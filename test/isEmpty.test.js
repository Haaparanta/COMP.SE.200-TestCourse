import isEmpty from "../src/isEmpty.js";

describe("isEmpty", () => {
  it("should return true for null or undefined values", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it("should return true for boolean values", () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  it("should return true for numbers", () => {
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(-1)).toBe(true);
    expect(isEmpty(0)).toBe(true);
  });

  it("should return false for non-empty arrays", () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it("should return true for empty arrays", () => {
    expect(isEmpty([])).toBe(true);
  });

  it("should return false for non-empty strings", () => {
    expect(isEmpty("abc")).toBe(false);
  });

  it("should return true for empty strings", () => {
    expect(isEmpty("")).toBe(true);
  });

  it("should return false for objects with properties", () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it("should return true for objects without properties", () => {
    expect(isEmpty({})).toBe(true);
  });
});
