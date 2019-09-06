const ConfigProvider = require('../ConfigProvider');

class ApiSutFactory{
    constructor(){
        this._type = undefined;
    }
    set type(value) {
        this._type = value;
    }
    getApiSut(){
        let configProvider = new ConfigProvider();

        let authBasePath = configProvider['authBasePath'];
        let clientId = configProvider['clientId'];
        let clientSecret = configProvider['clientSecret'];
        let accountId = configProvider['accountId'];
        let scope = configProvider['scope'];

        return new this._type(authBasePath, clientId, clientSecret, accountId, scope);
    }
}

module.exports = ApiSutFactory;