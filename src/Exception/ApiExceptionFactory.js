const BadRequestException = require('./BadRequestException');

class ApiExceptionFactory {
    static buildCustomException(methodName, response) {
        if (response.status >= 400) {

            const exceptionMessage = `Error calling ${methodName}: ${JSON.stringify(response.response.body)}`;
            switch (response.status) {
                case 400:
                    return new BadRequestException(response, exceptionMessage);
                //TODO - add default case
            }
        }
    }
}

module.exports = ApiExceptionFactory;