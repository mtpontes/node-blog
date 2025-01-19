const { IllegalAttributeError } = require('../infra/error/errors');

class ErrorHandler {

  static handle(err, req, res, next) {
    const errorMap = new Map([
      [IllegalAttributeError, { status: 400, message: err.message }],
      [SyntaxError, { status: 400, message: 'There was a syntax error.' }],
      [ReferenceError, { status: 500, message: 'A reference error occurred.' }],
      [Error, { status: 500, message: 'Internal server error' }],
    ]);
    const matchedError = [...errorMap.keys()].find(errorType => err instanceof errorType);

    if (!matchedError) {
      const responseError = errorMap.get(Error);
      console.log(`Response Error: ${responseError}`);

      console.error(`Error: ${err.message}`);

      return res.status(responseError.status).json(responseError);
    }

    const response = errorMap.get(matchedError);
    console.error('LOGANDO');
    console.error(`${matchedError.name}:`, err.message);
    res.status(response.status).json(response);
  }
}

module.exports = ErrorHandler;