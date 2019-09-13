const ApiClient = require('./ApiClient');
const TokenResponse = require('../src/Auth/TokenResponse');

class OAuth2ApiClient extends ApiClient{
    constructor(authService, runtimeInformationProvider){
        super(runtimeInformationProvider);
        this.authService = authService;
    }

    async callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType) {

        let getTokenResponseResult = await this.authService.getTokenResponse();
        let tokenResponse = new TokenResponse(getTokenResponseResult.data);

        this.basePath = tokenResponse.restInstanceUrl;
        this.authentication['oauth2'].accessToken = tokenResponse.accessToken;

        return super.callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, 'oauth2', contentTypes, accepts, returnType);
    }
}

module.exports = OAuth2ApiClient;