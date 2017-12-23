import mapper from '../../../src/models/users.mapper';

describe('Testing Model mapper for users', () => {
    it('Return empty model when no data', () => {
        const model = mapper({});
        expect(model).not.toBeNull();
        expect(model).not.toBeUndefined();
        expect(model.firstName).toBeUndefined();
        expect(model.lastName).toBeUndefined();
        expect(model.displayName).toBeUndefined();
        expect(model.email).toBeUndefined();
        expect(model.thumbnail).toBeUndefined();
        expect(model.photo).toBeUndefined();
    });
    it('Return first name', () => {
        const model = mapper({name: {first: 'test'}});
        expect(model.firstName).toBe('test');
        expect(model.displayName).toBe('test');
    });
    it('Return last name', () => {
        const model = mapper({name: {last: 'test'}});
        expect(model.lastName).toBe('test');
        expect(model.displayName).toBe('test');
    });
    it('Return first and last name', () => {
        const model = mapper({name: {first: 'test', last: 'tester'}});
        expect(model.firstName).toBe('test');
        expect(model.lastName).toBe('tester');
        expect(model.displayName).toBe('test tester');
    });
    it('Return email', () => {
        const model = mapper({email: 'test'});
        expect(model.email).toBe('test');
    });
    it('Return thumbnail', () => {
        const model = mapper({picture: {thumbnail: 'test'}});
        expect(model.thumbnail).toBe('test');
    });
    it('Return photo', () => {
        const model = mapper({picture: {large: 'test'}});
        expect(model.photo).toBe('test');
    });
});