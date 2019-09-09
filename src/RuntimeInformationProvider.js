const packageLock = require('../package-lock');

class RuntimeInformationProvider{
    constructor(){
        this._osPlatform = process.platform;
        this._osArchitecture = process.arch;
        this._nodeVersion = process.version;
    }
    getUserAgentString(){
        return `MCSDK/NODE/SDK.VERSION=${RuntimeInformationProvider.getSdkVersion()}/NODE.VERSION=${this._nodeVersion}/OS.NAME=${this._osPlatform}/OS.ARCH=${this._osArchitecture}`;
    }
    static getSdkVersion(){
        return packageLock['version'];
    }
}

module.exports = RuntimeInformationProvider;