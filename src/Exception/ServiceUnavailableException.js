class ServiceUnavailableException extends Error {
    constructor(exceptionMessage, statusCode) {
        super();
        this.name = 'Salesforce.MarketingCloud.Exceptions.' + this.constructor.name;
        this.message = exceptionMessage;
        this.status = statusCode;
    }
}

module.exports = ServiceUnavailableException;
