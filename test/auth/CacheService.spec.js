const CacheService = require('../../src/Auth/CacheService');

const expect = require('expect.js');

let cacheKey;

before(() => {
    cacheKey = 'cacheKey';
});

describe('CacheService', function () {
    describe('get', function () {
        it('should return null when passed parameter is not a key in the cache', function () {
            let cacheService = new CacheService();

            expect(cacheService.get(cacheKey)).to.eql(null);
        }
        );
    });
});