const ConfigProvider = require('../ConfigProvider');
const ClientConfiguration = require('../../src/Auth/ClientConfiguration');
const ApiClient = require('../../src/ApiClient');
const RuntimeInformationProvider = require('../../src/RuntimeInformationProvider');
const AuthService = require('../../src/Auth/AuthService');
const CacheService = require('../../src/Auth/CacheService');
const AuthenticationFailureException = require('../../src/Exception/AuthenticationFailureException');
const ServerUnreachableException = require('../../src/Exception/ServerUnreachableException');
const BadRequestException = require('../../src/Exception/BadRequestException');
const ResourceNotFoundException = require('../../src/Exception/ResourceNotFoundException');
const ApiSutFactory = require('../api/ApiSutFactory');
const AssetApi = require('../../src/Api/AssetApi');

const expect = require('expect.js');

let authBaseUrl;
let clientId;
let clientSecret;
let accountId;
let scope;

let configProvider;
let apiClient;
let cacheService;
let authService;
let assetApiInstance;
let clientConfiguration;

describe('ApiExceptionFactory', function () {
    before(() => {
        configProvider = new ConfigProvider();

        authBaseUrl = configProvider.authBaseUrl;
        clientId = configProvider.clientId;
        clientSecret = configProvider.clientSecret;
        accountId = configProvider.accountId;
        scope = configProvider.scope;

        cacheService = new CacheService();
        apiClient = new ApiClient(new RuntimeInformationProvider());
        assetApiInstance = new ApiSutFactory(AssetApi.prototype.constructor).create();
        clientConfiguration = new ClientConfiguration(authBaseUrl, clientId, clientSecret, accountId, scope);
    });

    describe('createCustomException', function () {
        it('should return AuthenticationFailureException for invalid clientId', async () => {
            let invalidClientIdConfig = new ClientConfiguration(authBaseUrl, 'invalidClientId', clientSecret, accountId, scope);
            authService = new AuthService(invalidClientIdConfig, apiClient, cacheService);

            try {
                await authService.getTokenResponse();
            } catch (e) {
                expect(e).to.be.an(AuthenticationFailureException);
            }
        });
        it('should return BadRequestException when number passed for clientId', async () => {
            let invalidClientSecretConfig = new ClientConfiguration(authBaseUrl, 3.141592, clientSecret, accountId, scope);
            authService = new AuthService(invalidClientSecretConfig, apiClient, cacheService);

            try {
                await authService.getTokenResponse();
            } catch (e) {
                expect(e).to.be.an(BadRequestException);
            }
        });
        it('should return ServerUnreachableException for invalid authBaseUrl', async () => {
            let invalidClientSecretConfig = new ClientConfiguration('invalidAuthBaseUrl', clientId, clientSecret, accountId, scope);
            authService = new AuthService(invalidClientSecretConfig, apiClient, cacheService);

            try {
                await authService.getTokenResponse();
            } catch (e) {
                expect(e).to.be.an(ServerUnreachableException);
            }
        });
        it('should return ResourceNotFoundException for GET on invalid asset id', async () => {
            try {
                let randomInt = getRandomInt(7);
                await assetApiInstance.getAssetById(randomInt);
            } catch (e) {
                expect(e).to.be.an(ResourceNotFoundException);
            }
        });
    });
});

function getRandomInt(length){
    return Math.floor(Math.random() * Math.pow(10, length));
}
