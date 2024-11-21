const { Router } = require('express');
const CommentController = require('../controller/CommentController');
// const CommentValidatorGroups = require('../validator/CommentValidatorGroups');

const router = Router();

router
  .post(
    '/comments/userId/:userId/publicationId/:publicationId',
    CommentController.create
  )

  .get(
    '/comments', 
    CommentController.getAll)
  .get(
    '/comments/id/:id',
    CommentController.get)

  .patch(
    '/comments/id/:id',
    CommentController.update)

  .delete(
    '/comments/id/:id',
    CommentController.delete);

module.exports = router;