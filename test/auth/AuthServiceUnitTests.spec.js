const CacheService = require('../../src/Auth/CacheService');
const TestHelper = require('./TestHelper');
const ApiClient = require('../../src/ApiClient');
const AuthService = require('../../src/Auth/AuthService');

const expect = require('expect.js');
const sinon = require('sinon');

let cacheServiceStub;
let clientConfiguration;
let apiClientStub;

describe('AuthService', function () {

    before(() => {
        clientConfiguration = TestHelper.createClientConfiguration();
    });

    describe('getTokenResponse', function () {
        it('should execute the callApi when there is no cached value for a cache key', async () => {
            apiClientStub = sinon.createStubInstance(ApiClient, {
                callApi: {data: 'data'}
            });
            cacheServiceStub = sinon.createStubInstance(CacheService, {
                get: null
            });
            let authService = new AuthService(clientConfiguration, apiClientStub, cacheServiceStub);

            await authService.getTokenResponse();

            expect(apiClientStub.callApi.calledOnce).to.eql(true);
            }
        );
    });
});
