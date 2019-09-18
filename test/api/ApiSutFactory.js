const ConfigProvider = require('../ConfigProvider');

class ApiSutFactory{
    constructor(type){
        this._type = type;
    }
    create(){
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