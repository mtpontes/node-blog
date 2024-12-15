const { Router } = require('express');
const ReplyController = require('../controller/ReplyController');
const ReplyValidatorGroups = require('../validator/reply/ReplyValidatorGroups');

const router = Router();
router
  // TODO : O userId deve ser recuperado a partir da autenticação do usuário
  .post(
    '/replies/userId/:userId/commentId/:commentId',
    ReplyValidatorGroups.rulesOperationCreate(),
    ReplyController.create)

  .get(
    '/replies/comment/id/:id',
    ReplyController.getAll)

  .patch(
    '/replies/id/:id',
    ReplyValidatorGroups.rulesOperationUpdate(),
    ReplyController.update)

  .delete(
    '/replies/id/:id',
    ReplyValidatorGroups.rulesOperationDelete(),
    ReplyController.delete);

module.exports = router;