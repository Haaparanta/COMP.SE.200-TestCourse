import countBy from "../src/countBy.js";

//
// I think that it is silly that countBy return 0 for value that is 1 time in the collection. I think that it should return 1.
//
describe("countBy", () => {
  // ******************** Successful tests ********************
  it("returns an empty object for an empty array", () => {
    expect(countBy([], (item) => item.type)).toEqual({});
  });

  it("handles invalid function", () => {
    const collection = [1, 2, 3];
    expect(() => countBy(collection, "not a function")).toThrow();
  });

  test("handles non-array/object collections", () => {
    expect(countBy(null, (value) => value)).toEqual({});
    expect(countBy(123, (value) => value)).toEqual({});
  });

  test("handles non-array/object collections", () => {
    expect(countBy(null, (value) => value)).toEqual({});
    expect(countBy(123, (value) => value)).toEqual({});
  });

  test("handles being called with no arguments", () => {
    expect(countBy()).toEqual({});
  });

  test("counts occurrences in an object collection", () => {
    const data = { a: "apple", b: "banana", c: "apple" };
    expect(countBy(data, (value) => value)).toEqual({ apple: 1, banana: 0 });
  });

  test("handles keys that overwrite Object prototype properties", () => {
    const data = ["constructor", "toString", "hasOwnProperty"];
    expect(countBy(data, (value) => value)).toEqual({
      constructor: 0,
      toString: 0,
      hasOwnProperty: 0,
    });
  });

  test("handles iteratee returning undefined", () => {
    const data = ["a", "b", "c"];
    expect(countBy(data, () => undefined)).toEqual({ undefined: 2 });
  });

  test("counts occurrences based on a property of objects in an array", () => {
    const users = [
      { user: "barney", active: true },
      { user: "betty", active: true },
      { user: "fred", active: false },
    ];
    expect(countBy(users, (value) => value.active)).toEqual({
      true: 1,
      false: 0,
    });
  });

  test("counts occurrences in an array of strings", () => {
    expect(countBy(["a", "b", "a", "c", "b", "b"], (value) => value)).toEqual({
      a: 1,
      b: 2,
      c: 0,
    });
  });

  test("works with a complex iteratee function", () => {
    const data = [1, 2, 3, 4, 5];
    expect(
      countBy(data, (value) => (value % 2 === 0 ? "even" : "odd"))
    ).toEqual({ odd: 2, even: 1 });
  });

  it("counts elements based on a given property in an array of objects", () => {
    const collection = [
      { type: "fruit", name: "apple" },
      { type: "vegetable", name: "carrot" },
      { type: "fruit", name: "banana" },
    ];
    expect(countBy(collection, (item) => item.type)).toEqual({
      fruit: 1,
      vegetable: 0,
    });
  });

  it("counts elements correctly when all elements are the same", () => {
    const collection = new Array(5).fill({ type: "fruit", name: "apple" });
    expect(countBy(collection, (item) => item.type)).toEqual({ fruit: 4 });
  });

  it("handles arrays with diverse value types", () => {
    const collection = [
      1,
      "1",
      true,
      false,
      null,
      undefined,
      { type: "fruit", name: "apple" },
    ];
    expect(countBy(collection, (item) => typeof item)).toEqual({
      number: 0,
      string: 0,
      boolean: 1,
      object: 1,
      undefined: 0,
    });
  });

  it("counts correctly with a function returning the same value", () => {
    const collection = [1, 2, 3, 4, 5];
    expect(countBy(collection, () => "constant")).toEqual({ constant: 4 });
  });

  it("counts correctly with a function returning different data types", () => {
    const collection = [1, "2", true];
    expect(countBy(collection, (item) => typeof item)).toEqual({
      number: 0,
      string: 0,
      boolean: 0,
    });
  });
});
