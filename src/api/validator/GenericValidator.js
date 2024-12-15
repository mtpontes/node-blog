const { param } = require('express-validator');

class GenericValidator {
  static Param = {
    param: (idName) =>
      param(idName)
        .notEmpty()
        .withMessage(`Invalid param ${idName}: Deve ser um valor válido`),
    id: () =>
      param('id')
        .notEmpty()
        .withMessage(`Invalid param id: Deve ser um id válido`),
  };
}

module.exports = GenericValidator;