const { Router } = require('express');
const ReplyController = require('../controller/ReplyController');

const router = Router();

router
  .post(
    '/replies/userId/:userId/commentId/:commentId',
    ReplyController.create
  )

  .get(
    '/replies', 
    ReplyController.getAll)
  .get(
    '/replies/id/:id',
    ReplyController.get)

  .patch(
    '/replies/id/:id',
    ReplyController.update)

  .delete(
    '/replies/id/:id',
    ReplyController.delete);

module.exports = router;