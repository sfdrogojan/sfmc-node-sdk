const RuntimeInformationProvider = require('../RuntimeInformationProvider');

class AuthService{
    constructor(clientConfig, apiClient){
        this.clientConfig = clientConfig;
        this.apiClient = apiClient;
    }

    async getTokenResponse() {

        this.apiClient.basePath = this.clientConfig.authBasePath;

        let runtimeInformationProvider = new RuntimeInformationProvider();

        return this.apiClient.callApi('v2/token',
            'POST',
            {},
            {},
            {'User-Agent': runtimeInformationProvider.getUserAgentString()},
            {},
            this.getTokenRequestPayload(),
            'oauth2',
            [],
            [],
            Object
        );
    }

    getTokenRequestPayload(){
        let tokenRequestPayload = {
            'client_id': this.clientConfig.clientId,
            'client_secret': this.clientConfig.clientSecret,
            'grant_type': 'client_credentials',
            'account_id': this.clientConfig.accountId
        };
        if (this.clientConfig.scope) {
            tokenRequestPayload['scope'] = this.clientConfig.scope;
        }
        return tokenRequestPayload;
    }
}

module.exports = AuthService;