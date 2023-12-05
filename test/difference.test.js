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

  test('difference returns correct elements', () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });

  test('difference works with multiple exclusion arrays', () => {
    expect(difference([2, 1, 3, 4], [2, 3], [4, 5])).toEqual([1]);
  });
  
  test('difference returns an empty array if the first array is empty', () => {
    expect(difference([], [2, 3])).toEqual([]);
  });
  
  const customComparator = (a, b) => a === b;
  test('Difference with custom comparator', () => {
    expect(difference([2.1, 1.2], [2.3, 3.4], undefined, customComparator)).toEqual([2.1, 1.2]);
  });

  const square = n => n * n;
  test('Difference using map function', () => {
    expect(difference([4, 8], [2, 3], square)).toEqual([16, 64]);
  });

});
