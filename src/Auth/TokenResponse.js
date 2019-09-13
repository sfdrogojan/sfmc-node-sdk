class TokenResponse{
    constructor(data) {
        this._accessToken = data['access_token'];
        this._expiredIn = data['expires_in'];
        this._restInstanceUrl = data['rest_instance_url'];
        this._soapInstanceUrl = data['soap_instance_url'];
        this._tokenType = data['token_type'];
        this._scope = data['_scope'];
    }

    get accessToken() {
        return this._accessToken;
    }
    get expiredIn() {
        return this._expiredIn;
    }
    get restInstanceUrl() {
        return this._restInstanceUrl;
    }
    get soapInstanceUrl() {
        return this._soapInstanceUrl;
    }
    get tokenType() {
        return this._tokenType;
    }
    get scope() {
        return this._scope;
    }

    set accessToken(value) {
        this._accessToken = value;
    }
    set expiredIn(value) {
        this._expiredIn = value;
    }
    set restInstanceUrl(value) {
        this._restInstanceUrl = value;
    }
    set soapInstanceUrl(value) {
        this._soapInstanceUrl = value;
    }
    set tokenType(value) {
        this._tokenType = value;
    }
    set scope(value) {
        this._scope = value;
    }
}

module.exports = TokenResponse;