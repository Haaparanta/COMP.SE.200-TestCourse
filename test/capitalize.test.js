import capitalize from '../src/capitalize.js';


describe('Capitalize', () => {

  it('Capitalizes basic string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('String with Uppercase Characters', () => {
    expect(capitalize('hELLO')).toBe('Hello');
    expect(capitalize('HELLO')).toBe('Hello');
    expect(capitalize('HeLlO')).toBe('Hello');
  });

  it('String with special characters', () => {
    expect(capitalize('hello!')).toBe('Hello!');
    expect(capitalize('hello!')).toBe('Hello!');
    expect(capitalize('hello?')).toBe('Hello?');
    expect(capitalize('hello?')).toBe('Hello?');
    expect(capitalize('hello.')).toBe('Hello.');
    expect(capitalize('hello.')).toBe('Hello.');
  });

  it('Empty String', () => {
    expect(capitalize('')).toBe('');
  });

  it('String with Leading Spaces', () => {
    expect(capitalize(' hello')).toBe(' Hello');
    expect(capitalize('  hello')).toBe('  Hello');
  });

  it('String with Trailing Spaces', () => {
    expect(capitalize('hello ')).toBe('Hello ');
    expect(capitalize('hello  ')).toBe('Hello  ');
  });

  it('String with Leading and Trailing Spaces', () => {
    expect(capitalize(' hello ')).toBe(' Hello ');
    expect(capitalize('  hello  ')).toBe('  Hello  ');
  });

  it('String with a single character', () => {
    expect(capitalize('h')).toBe('H');
    expect(capitalize('H')).toBe('H');
  });

  it('String with a sentence', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('Hello world')).toBe('Hello world');
  });

  it('String with a numbers', () => {
    expect(capitalize('hello 123')).toBe('Hello 123');
    expect(capitalize('Hello 123')).toBe('Hello 123');
    expect(capitalize('123 hello')).toBe('123 hello');
  });

  it('Null', () => {
    expect(capitalize(null)).toBe('');
  });

  it('Undefined', () => {
    expect(capitalize(undefined)).toBe('');
  });

  it('Boolean', () => {
    expect(capitalize(true)).toBe('');
    expect(capitalize(false)).toBe('');
  });

  it('Object', () => {
    expect(capitalize({})).toBe('');
  });

  it('Array', () => {
    expect(capitalize([])).toBe('');
    expect(capitalize(['hello'])).toBe('hello');
    expect(capitalize([1, 2, 3])).toBe('123');
  });

  it('Number', () => {
    expect(capitalize(123)).toBe('');
    expect(capitalize(123)).toBe('');
  });

  it('Function', () => {
    expect(capitalize(() => {})).toBe('');
  });
  
});