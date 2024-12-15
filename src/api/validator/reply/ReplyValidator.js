const { body, param } = require('express-validator');

class ReplyValidator {
  static Body = {
    text: () =>
      body('text')
        .notEmpty()
        .withMessage('Invalid field text: Deve ser um texto válido'),
  };

  static Param = {
    id: () =>
      param('id')
        .notEmpty()
        .withMessage('Invalid param id: Deve ser um número inteiro válido'),
    replyId: () =>
      param('replyId')
        .notEmpty()
        .withMessage('Invalid param replyId: Deve ser um número inteiro válido'),

    commentId: () =>
      param('commentId')
        .notEmpty()
        .withMessage('Invalid param commentId: Deve ser um número inteiro válido'),

    userId: () =>
      param('userId')
        .notEmpty()
        .withMessage('Invalid param userId: Deve ser um número inteiro válido'),
  };
}

module.exports = ReplyValidator;