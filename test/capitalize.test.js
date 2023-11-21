import capitalize from '../src/capitalize.js';


describe('Capitalize', () => {

  test('Capitalizes basic string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('String with Uppercase Characters', () => {
    expect(capitalize('hELLO')).toBe('Hello');
    expect(capitalize('HELLO')).toBe('Hello');
    expect(capitalize('HeLlO')).toBe('Hello');
  });

  test('String with special characters', () => {
    expect(capitalize('hello!')).toBe('Hello!');
    expect(capitalize('hello!')).toBe('Hello!');
    expect(capitalize('hello?')).toBe('Hello?');
    expect(capitalize('hello?')).toBe('Hello?');
    expect(capitalize('hello.')).toBe('Hello.');
    expect(capitalize('hello.')).toBe('Hello.');
  });

  test('Empty String', () => {
    expect(capitalize('')).toBe('');
  });

  test('String with Leading Spaces', () => {
    expect(capitalize(' hello')).toBe(' Hello');
    expect(capitalize('  hello')).toBe('  Hello');
  });

  test('String with Trailing Spaces', () => {
    expect(capitalize('hello ')).toBe('Hello ');
    expect(capitalize('hello  ')).toBe('Hello  ');
  });

  test('String with Leading and Trailing Spaces', () => {
    expect(capitalize(' hello ')).toBe(' Hello ');
    expect(capitalize('  hello  ')).toBe('  Hello  ');
  });

  test('String with a single character', () => {
    expect(capitalize('h')).toBe('H');
    expect(capitalize('H')).toBe('H');
  });

  test('String with a sentence', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('Hello world')).toBe('Hello world');
  });

  test('String with a numbers', () => {
    expect(capitalize('hello 123')).toBe('Hello 123');
    expect(capitalize('Hello 123')).toBe('Hello 123');
    expect(capitalize('123 hello')).toBe('123 hello');
  });

  test('Null', () => {
    expect(capitalize(null)).toBe('');
  });

  test('Undefined', () => {
    expect(capitalize(undefined)).toBe('');
  });

  test('Boolean', () => {
    expect(capitalize(true)).toBe('');
    expect(capitalize(false)).toBe('');
  });

  test('Object', () => {
    expect(capitalize({})).toBe('');
  });

  test('Array', () => {
    expect(capitalize([])).toBe('');
    expect(capitalize(['hello'])).toBe('hello');
    expect(capitalize([1, 2, 3])).toBe('123');
  });

  test('Number', () => {
    expect(capitalize(123)).toBe('');
    expect(capitalize(123)).toBe('');
  });

  test('Function', () => {
    expect(capitalize(() => {})).toBe('');
  });
  
});