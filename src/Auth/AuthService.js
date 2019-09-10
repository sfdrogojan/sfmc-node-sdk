const RuntimeInformationProvider = require('../RuntimeInformationProvider');
const TokenResponse = require('./TokenResponse');

class AuthService{
    constructor(clientConfig, apiClient){
        this.clientConfig = clientConfig;
        this.apiClient = apiClient;
        //TODO - add cacheService to constructor
    }

    //TODO
    // getCacheKey() {
    //     return this.clientConfig.clientId + "-" + this.clientConfig.accountId;
    // }

    async getTokenResponse() {

        //TODO - implement cache logic

        let cachedTokenResponse = undefined; // for testing purposes

        if (cachedTokenResponse) {
            return cachedTokenResponse;
        } else {
            this.apiClient.basePath = this.clientConfig.authBasePath;

            let runtimeInformationProvider = new RuntimeInformationProvider();

            let authPromise = await this.apiClient.callApi('v2/token',
                'POST',
                {},
                {},
                {'User-Agent': runtimeInformationProvider.getUserAgentString()},
                {},
                this.getTokenRequestPayload(),
                ['oauth2'],
                [],
                [],
                typeof TokenResponse
            );

            return authPromise;
        }
    }

    getTokenRequestPayload(){
        let tokenRequestPayload = {
            'client_id': this.clientConfig.clientId,
            'client_secret': this.clientConfig.clientSecret,
            'grant_type': 'client_credentials'
        };
        if (this.clientConfig.accountId) {
            tokenRequestPayload['account_id'] = this.clientConfig.accountId;
        }
        if (this.clientConfig.scope) {
            tokenRequestPayload['scope'] = this.clientConfig.scope;
        }
        return tokenRequestPayload;
    }
}

module.exports = AuthService;