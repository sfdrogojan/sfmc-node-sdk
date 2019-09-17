const packageLock = require('../package-lock');
const os = require('os');

class RuntimeInformationProvider{
    constructor(){
        this._nodeVersion = process.version;
        this._osType = os.type();
        this._osRelease = os.release();
    }
    getUserAgentString(){
        return `MCSDK/NODE/${RuntimeInformationProvider.getSdkVersion()}/${this._nodeVersion}/${this._osType}/${this._osRelease}`;
    }
    static getSdkVersion(){
        return packageLock['version'];
    }
}

module.exports = RuntimeInformationProvider;