const ClientConfiguration = require('../Auth/ClientConfiguration');
const RuntimeInformationProvider = require('../RuntimeInformationProvider');
const ApiClient = require('../ApiClient');
const AuthService = require('../Auth/AuthService');
const OAuth2ApiClient = require('../OAuth2ApiClient');
const OAuth = require('../Auth/OAuth');

class BaseApi {
    constructor(authBasePath, clientId, clientSecret, accountId, scope){
        this.clientConfiguration = new ClientConfiguration(authBasePath, clientId, clientSecret, accountId, scope);
        this.runtimeInformationProvider = new RuntimeInformationProvider();

        let apiClient = new ApiClient(this.runtimeInformationProvider);
        apiClient.authentications['oauth2'] = new OAuth();

        this.authService = new AuthService(this.clientConfiguration, apiClient);

        this.apiClient = new OAuth2ApiClient(this.authService, this.runtimeInformationProvider);
        this.apiClient.authentications['oauth2'] = new OAuth();
    }
}

module.exports = BaseApi;