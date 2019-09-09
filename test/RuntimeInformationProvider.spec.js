const RuntimeInformationProvider = require('../src/RuntimeInformationProvider')
const expect = require('expect.js');

let runtimeInformationProvider;

before(()=>{
    runtimeInformationProvider = new RuntimeInformationProvider();
});

describe('RuntimeInformationProvider', function () {
    describe('getUserAgentString', function () {
        it('should return a string containing SDK version', function () {
            expect(runtimeInformationProvider.getUserAgentString()).to.contain('SDK.VERSION=');
        });
        it('should return a string containing Node.js version', function () {
            expect(runtimeInformationProvider.getUserAgentString()).to.contain('NODE.VERSION=');
        });
        it('should return a string containing OS name', function () {
            expect(runtimeInformationProvider.getUserAgentString()).to.contain('OS.NAME=');
        });
        it('should return a string containing OS architecture', function () {
            expect(runtimeInformationProvider.getUserAgentString()).to.contain('OS.ARCH=');
        });
    })
});