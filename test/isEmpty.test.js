import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {

    it('should return true for null or undefined values', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
    });
});

