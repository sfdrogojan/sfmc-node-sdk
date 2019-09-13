const ClientConfiguration = require('../Auth/ClientConfiguration');
const RuntimeInformationProvider = require('../RuntimeInformationProvider');
const ApiClient = require('../ApiClient');
const AuthService = require('../Auth/AuthService');
const OAuth2ApiClient = require('../OAuth2ApiClient');
const Authentication = require('../Auth/Authentication');

class BaseApi {
    constructor(authBasePath, clientId, clientSecret, accountId, scope){
        this.clientConfiguration = new ClientConfiguration(authBasePath, clientId, clientSecret, accountId, scope);
        this.runtimeInformationProvider = new RuntimeInformationProvider();
        let apiClient = new ApiClient(this.runtimeInformationProvider);

        this.authService = new AuthService(this.clientConfiguration, apiClient);
        this.apiClient = new OAuth2ApiClient(this.authService, this.runtimeInformationProvider);
    }
}

module.exports = BaseApi;