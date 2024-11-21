const { Router } = require('express');
const PublicationValidatorGroups = require('./../validator/publication/PublicationValidatorGroups');
const PublicationController = require('../controller/PublicationController');

const router = Router();

router
  .post(
    '/publications/userId/:userId',
    // [testando, testand2],
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

  .patch(
    '/publications/id/:id',
    PublicationValidatorGroups.rulesOperationUpdate(),
    PublicationController.update)

  .delete(
    '/publications/id/:id',
    PublicationValidatorGroups.rulesOperationDelete(),
    PublicationController.delete);

module.exports = router;

// function testando(request, response, next) {
//   console.log(`Body: ${JSON.stringify(request.body)}`);
//   next();
// }
// function testand2(request, response, next) {
//   const { createdAt } = request.query;
//   console.log(`Query: ${JSON.stringify(request.query)}`);
//   console.log(new Date(createdAt));
//   next();
// }