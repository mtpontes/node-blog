const GenericValidator = require('../GenericValidator');
const CommentValidator = require('./ReplyValidator');
const runValidations = require('../runValidations');

class ReplyValidatorGroups {

  static rulesOperationCreate() {
    return [
      CommentValidator.Body.text(),
      CommentValidator.Param.userId(),
      CommentValidator.Param.commentId(),
      runValidations
    ];
  }

  static rulesOperationGet() {
    return [
      GenericValidator.Param.param(),
      runValidations,
    ];
  }

  static rulesOperationUpdate() {
    return [
      CommentValidator.Body.text(),
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

module.exports = ReplyValidatorGroups;