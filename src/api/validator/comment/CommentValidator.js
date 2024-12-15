const { body, param } = require('express-validator');

class CommentValidator {
  static Body = {
    text: () =>
      body('text')
        .notEmpty()
        .withMessage('Invalid field text: Deve ser um texto válido'),
  };

  static Param = {
    commentId: () =>
      param('commentId')
        .isInt()
        .notEmpty()
        .withMessage('Invalid param commentId: Deve ser um número inteiro válido'),

    publicationId: () =>
      param('publicationId')
        .isInt()
        .notEmpty()
        .withMessage('Invalid param publicationId: Deve ser um número inteiro válido'),

    userId: () =>
      param('userId')
        .isInt()
        .notEmpty()
        .withMessage('Invalid param userId: Deve ser um número inteiro válido'),
  };
}

module.exports = CommentValidator;