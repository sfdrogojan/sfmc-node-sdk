class ConfigProvider{
    static configProvider = {
        osPlatform: process.platform,
        osArchitecture: process.arch,
        nodeVersion: process.version
    };
}

module.exports = ConfigProvider;