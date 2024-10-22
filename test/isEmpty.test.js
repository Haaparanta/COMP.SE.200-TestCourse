import isEmpty from "../src/isEmpty.js";


describe("isEmpty", () => {
  it("should return true for null", () => {
    expect(isEmpty(null)).toBe(true);
  });

  it("should return true for undefined", () => {
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

  it("should return false for non-empty strings", () => {
    expect(isEmpty("abc")).toBe(false);
  });

  it("should return true for empty strings", () => {
    expect(isEmpty("")).toBe(true);
  });

  it("should return false for non-empty arrays", () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it("should return true for empty arrays", () => {
    expect(isEmpty([])).toBe(true);
  });

  it("should return false for objects with properties", () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it("should return true for objects without properties", () => {
    expect(isEmpty({})).toBe(true);
  });

  test('isEmpty should return true for an empty arguments object', () => {
    const emptyArguments = (function() { return arguments })();
    expect(isEmpty(emptyArguments)).toBe(true);
  });
  
  test('isEmpty should return false for a non-empty arguments object', () => {
    const nonEmptyArguments = (function() { return arguments })(1, 2);
    expect(isEmpty(nonEmptyArguments)).toBe(false);
  });

  test('isEmpty should return true for an empty Map', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  test('isEmpty should return false for a non-empty Map', () => {
    const map = new Map();
    map.set('a', 1);
    expect(isEmpty(map)).toBe(false);
  });

  test('isEmpty should return true for an empty Set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  test('isEmpty should return false for a non-empty Set', () => {
    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).toBe(false);
  });
});
