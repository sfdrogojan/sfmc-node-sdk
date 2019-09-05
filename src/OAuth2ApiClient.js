const ApiClient = require('./ApiClient');

class OAuth2ApiClient extends ApiClient{
    constructor(authService){
        super();
        this.authService = authService;
    }

    callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType) {

        let authCallResponse = this.authService.getTokenResponse();
        //TODO - set the new basePath to the client REST TSE
        //TODO - set the accessToken

        return super.callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType);
    }
}

module.exports = OAuth2ApiClient;