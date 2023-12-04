import isObjectLike from "../src/isObjectLike";

describe("isObjectLike", () => {
  test("returns true for object", () => {
    expect(isObjectLike({ a: undefined })).toBe(true);
  });

  // Test all primitive types.
  test("returns false for number type", () => {
    expect(isObjectLike(Math.random())).toBe(false);
  });

  test("returns false for bigint type", () => {
    expect(isObjectLike(BigInt(Math.floor(Math.random() * 10)))).toBe(false);
  });

  test("returns false for boolean type", () => {
    expect(isObjectLike(true)).toBe(false);
  });

  test("returns false for null type", () => {
    expect(isObjectLike(null)).toBe(false);
  });

  test("returns false for undefined type", () => {
    expect(isObjectLike(undefined)).toBe(false);
  });

  test("returns false for string type", () => {
    expect(isObjectLike(Math.random.toString())).toBe(false);
  });

  test("returns false for symbol type", () => {
    expect(isObjectLike(Symbol("foo"))).toBe(false);
  });
});
