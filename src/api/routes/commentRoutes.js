const { Router } = require('express');
const CommentController = require('../controller/CommentController');
const CommentValidatorGroups = require('../validator/comment/CommentValidatorGroups');

const router = Router();
router
  // TODO : O userId deve ser recuperado a partir da autenticação do usuário
  .post(
    '/comments/userId/:userId/publicationId/:publicationId',
    CommentValidatorGroups.rulesOperationCreate(),
    CommentController.create)

  /*
    TODO : Esse endpoint serve para buscar todos os comments de uma publication
    Paginar e receber o ID da publication
  */
  .get(
    '/comments/publication/id/:id',
    CommentValidatorGroups.rulesOperationGetAll(),
    CommentController.getAll)

  .patch(
    '/comments/id/:id',
    CommentValidatorGroups.rulesOperationUpdate(),
    CommentController.update)

  .delete(
    '/comments/id/:id',
    CommentValidatorGroups.rulesOperationDelete(),
    CommentController.delete);

module.exports = router;