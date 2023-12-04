import countBy from '../src/countBy.js';


describe('countBy', () => {
    it('returns an empty object for an empty array', () => {
        expect(countBy([], item => item.type)).toEqual({});
    });

    it('handles invalid function', () => {
        const collection = [1, 2, 3];
        expect(() => countBy(collection, 'not a function')).toThrow();
    });

    test('counts occurrences based on a property of objects in an array', () => {
        const users = [
          { 'user': 'barney', 'active': true },
          { 'user': 'betty', 'active': true },
          { 'user': 'fred', 'active': false }
        ];
        expect(countBy(users, value => value.active)).toEqual({ 'true': 2, 'false': 1 });
      });
      
});