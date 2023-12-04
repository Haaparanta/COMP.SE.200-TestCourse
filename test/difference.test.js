import difference from "../src/difference.js";

describe("difference", () => {
  it("removes common elements from the first array", () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });

  it("returns first array as is when no overlapping values", () => {
    expect(difference([1, 2], [3, 4])).toEqual([1, 2]);
  });

  it("returns empty array when all elements of first array are in second array", () => {
    expect(difference([1, 2], [1, 2, 3])).toEqual([]);
  });

  it("returns empty array when first array is empty", () => {
    expect(difference([], [1, 2])).toEqual([]);
  });

  it("returns first array as is when second array is empty", () => {
    expect(difference([1, 2], [])).toEqual([1, 2]);
  });

  it("removes elements from first array that are in any of the additional arrays", () => {
    expect(difference([1, 2, 3, 4], [1, 2], [3])).toEqual([4]);
  });

  it("returns empty array when first argument is not an array", () => {
    expect(difference("string", [1, 2])).toEqual([]);
  });

  it("treats non-array second argument as empty", () => {
    expect(difference([1, 2], "string")).toEqual([1, 2]);
  });

  it("correctly handles undefined and null values", () => {
    expect(difference([1, null, undefined], [null])).toEqual([1, undefined]);
  });
});
