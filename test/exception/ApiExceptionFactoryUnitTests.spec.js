const TestHelper = require('../auth/TestHelper');
const ApiExceptionFactory = require('../../src/Exception/ApiExceptionFactory');

const expect = require('expect.js');

describe('ApiExceptionFactory', function () {

    const callApiCallerMethod = 'callApiCallerMethod';
    const exceptions = [
        {BadRequestException: 400},
        {AuthenticationFailureException: 401},
        {UnauthorizedAccessException: 403},
        {ResourceNotFoundException: 404},
        {InternalServerErrorException: 500},
        {BadGatewayException: 502},
        {ServiceUnavailableException: 503},
        {GatewayTimeoutException: 504},
        {ApiException: 418}
    ];

    describe('buildCustomException', function () {
        exceptions.forEach((exception) => {

            let exceptionObjKey = Object.keys(exception)[0];
            let exceptionObjValue = exception[exceptionObjKey];

            xit(`should return a ${exceptionObjKey} for a ${exceptionObjValue} status code in the request response`, function () {
                let requestResponse = TestHelper.createRequestResponse(exceptionObjValue);
                let expectedExceptionMessage = `Error calling ${callApiCallerMethod}: "${requestResponse.response.body}"`;
                let expectedExceptionName = `Salesforce.MarketingCloud.Exceptions.${exceptionObjKey}`;

                let returnedException = ApiExceptionFactory.buildCustomException(callApiCallerMethod, requestResponse);

                expect(returnedException.name).to.eql(expectedExceptionName);
                expect(returnedException.message).to.eql(expectedExceptionMessage);
                expect(returnedException.status).to.eql(exceptionObjValue);
            });
        });
        it('should return a ServerUnreachableException when status code is undefined', function () {
            let serverUnreachableError = TestHelper.createServerUnreachableError();
            let expectedExceptionMessage = `Error calling ${callApiCallerMethod}: ${JSON.stringify(serverUnreachableError)}`;
            let expectedExceptionName = `Salesforce.MarketingCloud.Exceptions.ServerUnreachableException`;

            let returnedException = ApiExceptionFactory.buildCustomException(callApiCallerMethod, serverUnreachableError);

            expect(returnedException.name).to.eql(expectedExceptionName);
            expect(returnedException.message).to.eql(expectedExceptionMessage);
        });
    });
});