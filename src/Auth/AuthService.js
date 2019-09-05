class AuthService{
    constructor(clientConfig, apiClient){
        this.clientConfig = clientConfig;
        this.apiClient = apiClient;
        //TODO - add cacheService to constructor
        // this.cacheService = cacheService;
    }

    getCacheKey() {
        return this.clientConfig.clientId + "-" + this.clientConfig.accountId;
    }

    getTokenResponse(){

        //TODO - implement cache logic
        //TODO - let cacheKey = this.getCacheKey();
        //TODO - let cachedTokenResponse = this.cacheService.get(cacheKey);

        let cachedTokenResponse = undefined; // for testing purposes

        if (!cachedTokenResponse){
            this.apiClient.basePath = this.clientConfig.authBasePath;

            let reponse = this.apiClient.callApi('v2/token',
                'POST',
                {},
                {},
                {},
                {},
                this.getTokenRequestPayload(),
                ['oauth2'],
                ['application/json'],
                ['application/json'],
                []
                )
        }
        else
        {
            return cachedTokenResponse;
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
    }
}

module.exports = AuthService;