const ApiClient = require('./ApiClient');

class OAuth2ApiClient extends ApiClient{
    constructor(authService, runtimeInformationProvider){
        super(runtimeInformationProvider);
        this.authService = authService;
    }

    async callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType) {

        let getTokenResponseResult = await this.authService.getTokenResponse();

        this.basePath = getTokenResponseResult['rest_instance_url'];
        this.authentication['oauth2'].accessToken = getTokenResponseResult['access_token'];

        return super.callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, 'oauth2', contentTypes, accepts, returnType);
    }
}

module.exports = OAuth2ApiClient;