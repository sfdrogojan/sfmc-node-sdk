const ConfigProvider = require('../ConfigProvider');
const ClientConfiguration = require('../../src/Auth/ClientConfiguration');
const ApiClient = require('../../src/ApiClient');
const RuntimeInformationProvider = require('../../src/RuntimeInformationProvider');
const AuthService = require('../../src/Auth/AuthService');
const CacheService = require('../../src/Auth/CacheService');
const AuthenticationFailureException = require('../../src/Exception/AuthenticationFailureException');
const ServerUnreachableException = require('../../src/Exception/ServerUnreachableException');
const BadRequestException = require('../../src/Exception/BadRequestException');

const expect = require('expect.js');

let authBasePath;
let clientId;
let clientSecret;
let accountId;
let scope;

let configProvider;
let apiClient;
let cacheService;
let authService;

describe('ApiExceptionFactory', function () {

    before(() => {
        configProvider = new ConfigProvider();

        authBasePath = configProvider.authBasePath;
        clientId = configProvider.clientId;
        clientSecret = configProvider.clientSecret;
        accountId = configProvider.accountId;
        scope = configProvider.scope;

        cacheService = new CacheService();
        apiClient = new ApiClient(new RuntimeInformationProvider());
    });

    afterEach(()=>{
        CacheService.cachedData = {};
    });

    describe('buildCustomException', function () {
        it('should return AuthenticationFailureException for invalid clientId', async () => {
            let invalidClientIdConfig = new ClientConfiguration(authBasePath, 'invalidClientId', clientSecret, accountId, scope);
            authService = new AuthService(invalidClientIdConfig, apiClient, cacheService);

            try {
                await authService.getTokenResponse();
            } catch (e) {
                expect(e).to.be.an(AuthenticationFailureException);
            }
        });
        it('should return AuthenticationFailureException for invalid clientSecret', async () => {
            let invalidClientSecretConfig = new ClientConfiguration(authBasePath, clientId, 'invalidClientSecret', accountId, scope);
            authService = new AuthService(invalidClientSecretConfig, apiClient, cacheService);

            try {
                await authService.getTokenResponse();
            } catch (e) {
                expect(e).to.be.an(AuthenticationFailureException);
            }
        });
        it('should return BadRequestException when number passed as clientId', async () => {
            let invalidClientSecretConfig = new ClientConfiguration(authBasePath, 3.141592, clientSecret, accountId, scope);
            authService = new AuthService(invalidClientSecretConfig, apiClient, cacheService);

            try {
                await authService.getTokenResponse();
            } catch (e) {
                expect(e).to.be.an(BadRequestException);
            }
        });
        it('should return ServerUnreachableException for invalid authBasePath', async () => {
            let invalidClientSecretConfig = new ClientConfiguration('invalidAuthBasePath', clientId, clientSecret, accountId, scope);
            authService = new AuthService(invalidClientSecretConfig, apiClient, cacheService);

            try {
                await authService.getTokenResponse();
            } catch (e) {
                expect(e).to.be.an(ServerUnreachableException);
            }
        });
    });
});
