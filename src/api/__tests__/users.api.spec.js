import nock from 'nock';

import {fetchUsers} from '../users.api';

describe('Testing API for random users', () => {

    beforeEach(() => {
        if (!nock.isActive()) nock.activate();
        nock.disableNetConnect();
    });

    afterEach(() => {
        nock.cleanAll();
        nock.enableNetConnect();
        nock.restore();
    });

    it('API works correctly to fetch users', (done) => {
        let seed = 22;
        let page = 1;
        nock('https://randomuser.me', {})
            .get(`/api/?seed=${seed}&page=${page}&results=20`)
            .reply(200, `
        {"results": [{
            "name": {
            "first": "nicholas"
            }
        }]}`);
        fetchUsers({seed, page})
            .then((result) => {
                expect(result.error).toBeNull();
                expect(result.list).toHaveLength(1);
                expect(result.list[0].name.first).toBe('nicholas');
            })
            .then(done)
            .catch(done)
    });
    it('Receives a error response', (done) => {
        let seed = 22;
        let page = 1;
        nock('https://randomuser.me', {})
            .get(`/api/?seed=${seed}&page=${page}&results=20`)
            .reply(200, '{ "error": "testing" }');
        fetchUsers({seed, page})
            .then((result) => {
                expect(result.error).toBe('testing');
                expect(result.list).toHaveLength(0);
            })
            .then(done)
            .catch(done)
    });
});