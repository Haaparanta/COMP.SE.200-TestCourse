import get from "../src/get.js";

describe("get", () => {
  // Create a test object with undefined values.
  let testObject = {
    a: [{ a: undefined }, { b: { a: undefined, b: null } }],
    b: { a: undefined },
    c: undefined,
    d: undefined,
    e: 12n,
  };

  beforeEach(() => {
    // Assign random values before each test.
    // Unnecessary, but cool.
    testObject.a[0].a = (Math.random() * 10).toString();
    testObject.a[1].a = Math.random() * 10;
    testObject.b.a = Math.random() < 0.5;
    testObject.c = Symbol((Math.random() * 10).toString());
  });

  test("returns undefined when value at path is undefined", () => {
    testObject.c = undefined;
    expect(get(testObject, "c")).toBeUndefined();
  });

  test("returns undefined when object is undefined or null", () => {
    expect(get(undefined, "path")).toBeUndefined();
    expect(get(null, "path")).toBeUndefined();
  });

  test("returns a defined value when values exist", () => {
    ["a", "b", "a[0].a", "a[1].a", "a[1].b", "b.a", "c"].forEach((path) => {
      expect(get(testObject, path)).toBeDefined();
    });
  });

  test("returns correct value at path", () => {
    expect(get(testObject, "b.a")).toBe(testObject.b.a);
  });

  test("returns correct values from arrays in the object", () => {
    expect(get(testObject, "a[1].a")).toBe(testObject.a[1].a);
  });

  test("returns default when value at path is undefined", () => {
    expect(get(testObject, "d", "default")).toBe("default");
  });

  test("returns default only when value at path is undefined", () => {
    expect(get(testObject, "c", "default")).not.toBe("default");
  });

  test("returns correct value with default value passed", () => {
    expect(get(testObject, "c", "default")).toBe(testObject.c);
  });

  test("does not mutate object", () => {
    testObject.c = null; // Remove symbol as symbols are unique.
    const beforeGet = structuredClone(testObject);
    get(testObject, "a");
    expect(testObject).toEqual(beforeGet);
  });

  test("returns undefined when path is undefined or null", () => {
    expect(get(testObject, undefined)).toBeUndefined();
    expect(get(testObject, null)).toBeUndefined();
  });

  test("returned value maintains value type", () => {
    expect(get(testObject, "a")).toBeInstanceOf(Object);
    // The string (Math.random() * 10).toString() returns fails
    // toBeInstanceOf(String) assertion for some reason so reassign a string.
    testObject.a[0].a = "test_string";
    expect(get(testObject, 'a[0].a')).toBeInstanceOf(String);
    expect(get(testObject, "a[1].a")).toBeInstanceOf(Number);
    expect(get(testObject, "a[1].b")).toBeInstanceOf(Object);
    expect(get(testObject, "b.a")).toBeInstanceOf(Boolean);
    expect(get(testObject, "c")).toBeInstanceOf(Symbol);
    expect(get(testObject, "d")).toBeInstanceOf(undefined);
    expect(get(testObject, "e")).toBeInstanceOf(BigInt);
  });
});
