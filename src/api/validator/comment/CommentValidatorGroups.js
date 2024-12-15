const GenericValidator = require('../GenericValidator');
const CommentValidator = require('./CommentValidator');
const runValidations = require('../runValidations');

class CommentValidatorGroups {

  static rulesOperationCreate() {
    return [
      CommentValidator.Body.text(),
      CommentValidator.Param.publicationId(),
      CommentValidator.Param.userId(),
      runValidations
    ];
  }

  static rulesOperationGetAll() {
    return [
      GenericValidator.Param.param('id'),
      runValidations,
    ];
  }

  static rulesOperationUpdate() {
    return [
      GenericValidator.Param.param('id'),
      runValidations,
    ];
  }

  static rulesOperationDelete() {
    return [
      GenericValidator.Param.param('id'),
      runValidations,
    ];
  }
}

module.exports = CommentValidatorGroups;