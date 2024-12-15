const { Router } = require('express');
const PublicationValidatorGroups = require('./../validator/publication/PublicationValidatorGroups');
const PublicationController = require('../controller/PublicationController');

const router = Router();

router
  .post(
    '/publications/userId/:userId',
    PublicationValidatorGroups.rulesOperationCreate(),
    PublicationController.create)

  .get(
    '/publications',
    PublicationValidatorGroups.rulesOperationGetAll(),
    PublicationController.getAll)
  .get(
    '/publications/id/:id',
    PublicationValidatorGroups.rulesOperationGet(),
    PublicationController.get)
  .get(
    '/publications/user/id/:id',
    PublicationValidatorGroups.rulesOperationGet(),
    PublicationController.get)

  .patch(
    '/publications/id/:id',
    PublicationValidatorGroups.rulesOperationUpdate(),
    PublicationController.update)

  .delete(
    '/publications/id/:id',
    PublicationValidatorGroups.rulesOperationDelete(),
    PublicationController.delete);

module.exports = router;