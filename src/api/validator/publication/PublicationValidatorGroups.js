const PublicationValidator = require('./PublicationValidator');
const runValidations = require('../runValidations');

class PublicationValidatorGroups {

  static rulesOperationCreate() {
    return [
      PublicationValidator.Param.userId(),
      PublicationValidator.Body.description(),
      PublicationValidator.Body.imageLink(),
      PublicationValidator.Body.requireDescriptionOrImageLink,
      runValidations
    ];
  }

  static rulesOperationGet() {
    return [
      PublicationValidator.Param.id(),
      runValidations,
    ];
  }

  static rulesOperationGetAll() {
    return [
      PublicationValidator.Query.createdAt(),
      runValidations,
    ];
  }

  static rulesOperationUpdate() {
    return [
      PublicationValidator.Param.id(),
      runValidations,
    ];
  }

  static rulesOperationDelete() {
    return [
      PublicationValidator.Param.id(),
      runValidations,
    ];
  }
}

module.exports = PublicationValidatorGroups;