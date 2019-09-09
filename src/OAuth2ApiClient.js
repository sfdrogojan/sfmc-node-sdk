const ApiClient = require('./ApiClient');

class OAuth2ApiClient extends ApiClient{
    constructor(authService, runtimeInformationProvider){
        super(runtimeInformationProvider);
        this.authService = authService;
    }

    callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType) {

        this.authService.getTokenResponse();

        //TODO - set the new basePath to the client REST TSE
        //TODO - set the accessToken, cache logic

        return super.callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType);
    }
}

module.exports = OAuth2ApiClient;