class TokenResponse{
    constructor(data) {
        this._accessToken = data['access_token'];
        this._expiredIn = data['expires_in'];
        this._restInstaceUrl = data['rest_instance_url'];
        this._soapInstaceUrl = data['soap_instance_url'];
        this._tokenType = data['token_type'];
        this._scope = data['_scope'];
    }

    get accessToken() {
        return this._accessToken;
    }
    get expiredIn() {
        return this._expiredIn;
    }
    get restInstaceUrl() {
        return this._restInstaceUrl;
    }
    get soapInstaceUrl() {
        return this._soapInstaceUrl;
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
    set restInstaceUrl(value) {
        this._restInstaceUrl = value;
    }
    set soapInstaceUrl(value) {
        this._soapInstaceUrl = value;
    }
    set tokenType(value) {
        this._tokenType = value;
    }
    set scope(value) {
        this._scope = value;
    }
}

module.exports = TokenResponse;