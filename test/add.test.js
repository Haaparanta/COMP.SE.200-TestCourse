import add from '../src/add.js';

describe('Add function', () => {
  it('Should add two positive numbers correctly', () => {
    expect(add(6, 4)).toBe(10);
    expect(add(2, 3)).toBe(5);
    expect(add(1, 1)).toBe(2);
  });

  it('Should add two negative numbers correctly', () => {
    expect(add(-2, -3)).toBe(-5);
    expect(add(-1, -1)).toBe(-2);
    expect(add(-1, 1)).toBe(0);
  });

  it('Should add decimal numbers correctly', () => {
    expect(add(2.5, 3.5)).toBe(6);
    expect(add(1.1, 1.2)).toBeCloseTo(2.3);
  });

  it('Should handle addition with zero correctly', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(3, 0)).toBe(3);
    expect(add(0, 0)).toBe(0);
  });

  it('Should add large numbers correctly', () => {
    expect(add(1000000000, 1000000000)).toBe(2000000000);
    expect(add(500000000, 500000000)).toBe(1000000000);
  });

  // it should handle non-numeric inputs with a throw error and not combining the inputs
  // function add parameters 
  it('Should handle non-numeric inputs', () => {
    expect(() => add('a', 'b')).toThrow();
    expect(() => add(undefined, null)).toThrow();
    expect(() => add(true, false)).toThrow();
  });
});