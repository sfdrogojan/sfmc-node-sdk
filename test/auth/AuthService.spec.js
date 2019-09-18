const ConfigProvider = require('../ConfigProvider');
const ClientConfiguration = require('../../src/Auth/ClientConfiguration');
const ApiClient = require('../../src/ApiClient');
const RuntimeInformationProvider = require('../../src/RuntimeInformationProvider');
const AuthService = require('../../src/Auth/AuthService');
const CacheService = require('../../src/Auth/CacheService');

const expect = require('expect.js');

let authBasePath;
let clientId;
let clientSecret;
let accountId;
let scope;

let configProvider;
let clientConfiguration;
let apiClient;
let cacheService;
let authService;

before(() => {
    configProvider = new ConfigProvider();

    authBasePath = configProvider.authBasePath;
    clientId = configProvider.clientId;
    clientSecret = configProvider.clientSecret;
    accountId = configProvider.accountId;
    scope = configProvider.scope;

    apiClient = new ApiClient(new RuntimeInformationProvider());
});

describe('AuthService', function () {
    describe('getTokenResponse', function () {
        it('should return token response for valid credentials', async () => {
            clientConfiguration = new ClientConfiguration(authBasePath, clientId, clientSecret, accountId, scope);
            cacheService = new CacheService();
            authService = new AuthService(clientConfiguration, apiClient, cacheService);

            let getTokenResponseResult = await authService.getTokenResponse();
            let tokenResponse = getTokenResponseResult.data;

            expect(tokenResponse.access_token).not.be(undefined);
            expect(tokenResponse.rest_instance_url).not.be(undefined);
            expect(tokenResponse.soap_instance_url).not.be(undefined);
            expect(tokenResponse.token_type).not.be(undefined);
            expect(tokenResponse.expires_in).to.be.greaterThan(0);
        }
        );
    });
    describe('getTokenResponse', function () {
        it('should return Unauthorized error for invalid clientId', async () => {
            let invalidClientConfiguration = new ClientConfiguration(authBasePath, 'invalidClientId', clientSecret, accountId, scope);
            cacheService = new CacheService();
            authService = new AuthService(invalidClientConfiguration, apiClient, cacheService);

            try {
                await authService.getTokenResponse();
            } catch (e) {
                expect(e.status).to.eql(401);
            }
        }
        );
    });
    describe('getTokenResponse', function () {
        it('should return Unauthorized error for invalid clientSecret', async () => {
            let invalidClientConfiguration = new ClientConfiguration(authBasePath, clientId, 'invalidClientSecret', accountId, scope);
            cacheService = new CacheService();
            authService = new AuthService(invalidClientConfiguration, apiClient, cacheService);

            try {
                await authService.getTokenResponse();
            } catch (e) {
                expect(e.status).to.eql(401);
            }
        }
        );
    });
    describe('getTokenResponse', function () {
        it('should return the same token response object when called multiple times', async () => {
            clientConfiguration = new ClientConfiguration(authBasePath, clientId, clientSecret, accountId, scope);
            cacheService = new CacheService();
            authService = new AuthService(clientConfiguration, apiClient, cacheService);

            let tokenResponse1 = await authService.getTokenResponse();
            let tokenResponse2 = await authService.getTokenResponse();

            expect(tokenResponse1.data).to.eql(tokenResponse2.data);
        }
        );
    });
});
