const ClientConfiguration = require('../../src/Auth/ClientConfiguration');

class TestHelper {
    static createTokenResponseData(){
        return {
            data: {
                access_token: 'access_token',
                expires_in: 1080,
                rest_instance_url: 'rest_instance_url',
                soap_instance_url: 'soap_instance_url',
                scope: 'scope',
                token_type: 'Bearer'
            }
        }
    }

    static createClientConfiguration(){
        return new ClientConfiguration(
            'https://auth.com',
            'clientId',
            'clientSecret',
            123456,
            'scope'
        )
    }
}

module.exports = TestHelper;