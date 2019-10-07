const ConfigProvider = require('../../test/ConfigProvider');

(function (root, factory) {
    factory(require('../index'));
}(this, function (SalesforceMarketingCloud) {
    class Client {
        constructor(clientConfig) {
            let _authBaseUrl;
            this.getAuthBaseUrl = () => {return _authBaseUrl; };
            let _clientId;
            this.getClientId = () => {return _clientId; };
            let _clientSecret;
            this.getClientSecret = () => {return _clientSecret; };
            let _accountId;
            this.getAccountId = () => {return _accountId; };
            let _scope;
            this.getScope = () => {return _scope; };

            this._assetApi = undefined;
		    this._campaignApi = undefined;
		    this._transactionalMessagingApi = undefined;

            if (!clientConfig) {
                setConfigParams(new ConfigProvider());
            } else {
                setConfigParams(clientConfig);
            }

            function setConfigParams(configParams) {
                _authBaseUrl = configParams.authBaseUrl;
                _clientId = configParams.clientId;
                _clientSecret = configParams.clientSecret;
                _accountId = configParams.accountId;
                _scope = configParams.scope;
            }
        }
        
	    get assetApi() {
            if(this._assetApi === undefined){
                this._assetApi = new SalesforceMarketingCloud.AssetApi(
                this.getAuthBaseUrl(),
                this.getClientId(),
                this.getClientSecret(),
                this.getAccountId(),
                this.getScope());
            }
            return this._assetApi;
        }
	    get campaignApi() {
            if(this._campaignApi === undefined){
                this._campaignApi = new SalesforceMarketingCloud.CampaignApi(
                this.getAuthBaseUrl(),
                this.getClientId(),
                this.getClientSecret(),
                this.getAccountId(),
                this.getScope());
            }
            return this._campaignApi;
        }
	    get transactionalMessagingApi() {
            if(this._transactionalMessagingApi === undefined){
                this._transactionalMessagingApi = new SalesforceMarketingCloud.TransactionalMessagingApi(
                this.getAuthBaseUrl(),
                this.getClientId(),
                this.getClientSecret(),
                this.getAccountId(),
                this.getScope());
            }
            return this._transactionalMessagingApi;
        }
    }
    module.exports = Client;
}));