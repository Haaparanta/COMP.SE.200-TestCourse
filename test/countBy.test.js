import countBy from '../src/countBy.js';


describe('countBy', () => {
    it('counts elements based on a given property in an array of objects', () => {
        const collection = [
            { 'type': 'fruit', 'name': 'apple' },
            { 'type': 'vegetable', 'name': 'carrot' },
            { 'type': 'fruit', 'name': 'banana' }
        ];
        expect(countBy(collection, item => item.type)).toEqual({ 'fruit': 2, 'vegetable': 1 });
    });

    it('returns an empty object for an empty array', () => {
        expect(countBy([], item => item.type)).toEqual({});
    });

    it('counts elements correctly when all elements are the same', () => {
        const collection = new Array(5).fill({ 'type': 'fruit', 'name': 'apple' });
        expect(countBy(collection, item => item.type)).toEqual({ 'fruit': 5 });
    });

    it('handles arrays with diverse value types', () => {
        const collection = [1, '1', true, false, null, undefined, { 'type': 'fruit', 'name': 'apple' }];
        expect(countBy(collection, item => typeof item)).toEqual({
            'number': 1,
            'string': 1,
            'boolean': 2,
            'object': 3
        });
    });

    it('counts correctly with a function returning the same value', () => {
        const collection = [1, 2, 3, 4, 5];
        expect(countBy(collection, () => 'constant')).toEqual({ 'constant': 5 });
    });

    it('counts correctly with a function returning different data types', () => {
        const collection = [1, '2', true];
        expect(countBy(collection, item => typeof item)).toEqual({
            'number': 1,
            'string': 1,
            'boolean': 1
        });
    });

    it('handles invalid function', () => {
        const collection = [1, 2, 3];
        expect(() => countBy(collection, 'not a function')).toThrow();
    });

    it('counts elements based on nested object properties', () => {
        const collection = [
            { 'data': { 'type': 'fruit', 'name': 'apple' } },
            { 'data': { 'type': 'vegetable', 'name': 'carrot' } },
            { 'data': { 'type': 'fruit', 'name': 'banana' } }
        ];
        expect(countBy(collection, item => item.data.type)).toEqual({ 'fruit': 2, 'vegetable': 1 });
    });

    it('counts using a function returning complex keys', () => {
        const collection = [
            { 'type': 'fruit', 'name': 'apple', 'color': 'green' },
            { 'type': 'fruit', 'name': 'banana', 'color': 'yellow' },
            { 'type': 'vegetable', 'name': 'carrot', 'color': 'orange' }
        ];
        expect(countBy(collection, item => `${item.type}-${item.color}`)).toEqual({
            'fruit-green': 1,
            'fruit-yellow': 1,
            'vegetable-orange': 1
        });
    });
});