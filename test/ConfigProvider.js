class ConfigProvider{
    constructor(){
        return {
            authBaseUrl: process.env.SFMC_AUTH_BASE_URL,
            clientId: process.env.SFMC_CLIENT_ID,
            clientSecret: process.env.SFMC_CLIENT_SECRET,
            accountId: process.env.SFMC_ACCOUNT_ID,
            scope: process.env.SFMC_SCOPE,
            shortCode: process.env.SFMC_SHORT_CODE,
            keyWord: process.env.SFMC_KEYWORD,
            countryCode: process.env.SFMC_COUNTRY_CODE
        }
    }
}

module.exports = ConfigProvider;