import capitalize from '../src/capitalize.js';


describe('Capitalize', () => {
  // ******************** Successful tests ********************

  it('Capitalizes basic string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('Capitalizes string with spaces', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('Hello world')).toBe('Hello world');
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

  it('String with special characters', () => {
    expect(capitalize('!hello')).toBe('!hello');
    expect(capitalize('?hello')).toBe('?hello');
    expect(capitalize('.hello')).toBe('.hello');
  });

  it('Empty String', () => {
    expect(capitalize('')).toBe('');
  });

  it('String with Trailing Spaces', () => {
    expect(capitalize('hello ')).toBe('Hello ');
    expect(capitalize('hello  ')).toBe('Hello  ');
  });

  it('String with a single character', () => {
    expect(capitalize('h')).toBe('H');
    expect(capitalize('H')).toBe('H');
  });

  it('String with a numbers', () => {
    expect(capitalize('hello 123')).toBe('Hello 123');
    expect(capitalize('Hello 123')).toBe('Hello 123');
    expect(capitalize('123 hello')).toBe('123 hello');
  });

  it('Array', () => {
    expect(capitalize([])).toBe('');
    expect(capitalize(['hello'])).toBe('Hello');
  });

  it('Number', () => {
    expect(capitalize(123)).toBe('123');
  });

  it('Null', () => {
    expect(capitalize(null)).toBe('Null'); // I think null should throw an error
  });

  it('Undefined', () => {
    expect(capitalize(undefined)).toBe('Undefined'); // I think undefined should throw an error
  });

  it('Boolean', () => {
    expect(capitalize(true)).toBe('True'); // I think boolean should throw an error
    expect(capitalize(false)).toBe('False'); // I think boolean should throw an error
  });
});