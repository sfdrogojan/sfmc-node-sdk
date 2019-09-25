class BadRequestException extends Error {
    constructor(response, exceptionMessage) {
        super();
        this.name = 'Salesforce.MarketingCloud.Exceptions.' + this.constructor.name;
        this.message = exceptionMessage;
    }
}

module.exports = BadRequestException;

