const { body, param, validationResult } = require('express-validator');

class PublicationValidator {
  static Body = {
    userId: () =>
      body('userId')
        .isInt()
        .notEmpty()
        .withMessage('Invalid userId: Deve ser um número inteiro válido'),

    description: () =>
      body('description')
        .isString()
        .withMessage('Invalid description: Deve ser uma String válida'),

    descriptionNotEmpty: () =>
      body('description')
        .isString()
        .notEmpty()
        .withMessage('Invalid description: Deve ser uma String válida'),

    imageLink: () =>
      body('imageLink')
        .isString()
        .withMessage('Invalid imageLink: Deve ser uma String válida'),

    requireDescriptionOrImageLink: (request, response, next) => {
      const { description, imageLink } = request.body;
      if ((!description || description.trim() === '') && (!imageLink || imageLink.trim() === ''))
        return response.status(400).send({ error: 'É obrigatório fornecer um description ou imageLink valido.' });
      next();
    }
  };

  static Param = {
    id: () =>
      param('id')
        .notEmpty()
        .withMessage('Invalid userId: Deve ser um número inteiro válido'),
    userId: () =>
      param('userId')
        .notEmpty()
        .withMessage('Invalid userId: Deve ser um número inteiro válido'),
  };

  static Query = {
    createdAt: () =>
      param('fromCreatedAt')
        .optional()
        .notEmpty()
  };

  static handlerValidationErrors(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
}

module.exports = PublicationValidator;