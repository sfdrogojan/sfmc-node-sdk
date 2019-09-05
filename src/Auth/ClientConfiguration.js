class ClientConfiguration{
    constructor(authBasePath, clientId, clientSecret, accountId, scope){
        this._authBasePath = authBasePath;
        this._clientId = clientId;
        this._clientSecret = clientSecret;
        this._accountId = accountId;
        this._scope = scope;
    }
    get authBasePath() {
        return this._authBasePath;
    }

    get clientId() {
        return this._clientId;
    }

    get clientSecret() {
        return this._clientSecret;
    }

    get accountId() {
        return this._accountId;
    }

    get scope() {
        return this._scope;
    }
}

module.exports = ClientConfiguration;