const ConfigProvider = require('../ConfigProvider');

class ApiSutFactory{
    constructor(type){
        this._type = type;
    }
    create(){
        let configProvider = new ConfigProvider();

        let authBaseUrl = configProvider['authBaseUrl'];
        let clientId = configProvider['clientId'];
        let clientSecret = configProvider['clientSecret'];
        let accountId = configProvider['accountId'];
        let scope = configProvider['scope'];

        return new this._type(authBaseUrl, clientId, clientSecret, accountId, scope);
    }
}

module.exports = ApiSutFactory;