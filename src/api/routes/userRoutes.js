const { Router } = require('express');
const UserController = require('../controller/UserController');

const router = Router();
router
  .post('/users', UserController.create)
  .get('/users', UserController.getAll)
  .get('/users/id/:id', UserController.get)
  .put('/users/id/:id', UserController.update)
  .delete('/users/id/:id', UserController.delete);

module.exports = router;