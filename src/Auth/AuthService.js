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

    getTokenResponse(){

        //TODO - implement cache logic

        let cachedTokenResponse = undefined; // for testing purposes

        if (cachedTokenResponse) {
            return cachedTokenResponse;
        } else {
            this.apiClient.basePath = this.clientConfig.authBasePath;

            return this.apiClient.callApi('v2/token',
                'POST',
                {},
                {},
                {},
                {},
                this.getTokenRequestPayload(),
                ['oauth2'],
                [],
                [],
                []
            );
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