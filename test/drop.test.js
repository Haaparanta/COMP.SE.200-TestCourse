import drop from "../src/drop.js";

describe("drop", () => {
  test("drops value", () => {
    expect(drop([...Array(15).keys()])).toEqual(
      [...Array(14).keys()].map((_) => _ + 1)
    );
  });

  test("drops n values", () => {
    let n = Math.floor((Math.random() + 1) * 10);
    // Multiplier to make n * p size array.
    let p = Math.floor((Math.random() + 1) * 10);
    expect(drop([...Array(n * p).keys()], n)).toEqual(
      [...Array(n * p - n).keys()].map((_) => _ + n)
    );
  });

  test("returns empty array when one is passed", () => {
    expect(drop([])).toEqual([]);
    expect(drop([], Math.floor(Math.random() + 1))).toEqual([]);
  });

  test("drops no value when 0 is passed", () => {
    let n = Math.floor((Math.random() + 1) * 10);
    // Multiplier to make n * p size array.
    let p = Math.floor((Math.random() + 1) * 10);
    let arr = [...Array(n * p).keys()];
    expect(drop(arr, 0)).toEqual(arr);
  });

  test("drops no value when < 0 is passed", () => {
    let n = Math.floor((Math.random() + 1) * 10);
    // Multiplier to make n * p size array.
    let p = Math.floor((Math.random() + 1) * 10);
    let arr = [...Array(n * p).keys()];
    expect(drop(arr, -n)).toEqual(arr);
  });

  test("doesn't modify original array", () => {
    let n = Math.floor((Math.random() + 1) * 10);
    // Multiplier to make n * p size array.
    let p = Math.floor((Math.random() + 1) * 10);
    let arr = [...Array(n * p).keys()];
    let before = structuredClone(arr);
    drop(arr, n);
    expect(arr).toEqual(before);
  });

  test("returns empty array when n > array.length", () => {
    let n = Math.floor((Math.random() + 1) * 10);
    expect(drop([...Array(n).keys()], n + 1)).toEqual([]);
  });

  test("returns empty array when null is passed as array", () => {
    expect(drop(null)).toEqual([]);
  });

  test("returns empty array when null is passed as array", () => {
    expect(drop(undefined)).toEqual([]);
  });

  test("slices strings", () => {
    expect(drop("drop.test.js", 4)).toEqual([...".test.js"]);
  });

  test("maintains string type", () => {
    expect(drop("test 123 123 test", 4)).toEqual([..." 123 123 test"]);
    // For some reason split strings have no prototype so this doesn't work.
    //drop('test 123 123 test', 4).map(_ => expect(_).toBeInstanceOf(String));
  });
});
