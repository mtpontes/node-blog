const PublicationValidator = require('./PublicationValidator');

class PublicationValidatorGroups {

  static rulesOperationCreate() {
    return [
      PublicationValidator.Param.userId(),
      PublicationValidator.Body.description(),
      PublicationValidator.Body.imageLink(),
      PublicationValidator.handlerValidationErrors,
      PublicationValidator.Body.requireDescriptionOrImageLink
    ];
  }

  static rulesOperationGet() {
    return [
      PublicationValidator.Param.userId(),
      PublicationValidator.handlerValidationErrors,
    ];
  }

  static rulesOperationGetAll() {
    return [
      PublicationValidator.Query.createdAt(),
      PublicationValidator.handlerValidationErrors,
    ];
  }

  static rulesOperationUpdate() {
    return [
      PublicationValidator.Param.userId(),
      PublicationValidator.handlerValidationErrors,
    ];
  }

  static rulesOperationDelete() {
    return [
      PublicationValidator.Param.userId(),
      PublicationValidator.handlerValidationErrors,
    ];
  }
}

module.exports = PublicationValidatorGroups;