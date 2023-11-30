import filter from '../src/filter.js';

describe('filter', () => {
  let original = [];

  beforeEach(() => {
    // Create array of [0..n] where n is in [10..19]
    // Unnecessary, but cool.
    original = [...Array(Math.floor((Math.random() + 1) * 10)).keys()];
  });

  test('returns an array', () => {
    expect(filter(original, (_=>true))).toBeInstanceOf(Array);
  });

  test('returns a filtered array', () => {
    expect(filter(original, (_ => _ % 2))).toEqual(original.filter(_ => _ % 2))
  });

  test('returns an empty array when one is passed', () => {
    // Neither pass
    // expect(filter([], (_ => true))).toEqual([]);
    expect(filter([], (_ => false)).length).toEqual(0);
  });

  test('returns empty array when null or undefined is passed', () => {
    expect(filter(null, (_ => true)).length).toEqual(0);
    expect(filter(undefined, (_ => true)).length).toEqual(0);
  });

  test('doesn\'t modify the original array', () => {
    let copy = structuredClone(original);

    filter(original, (_ => _ % 2));

    expect(original).toEqual(copy);
  });

  test('filters nothing when predicate is true for all', () => {
    expect(filter(original, (_ => true))).toEqual(original);
  });

});