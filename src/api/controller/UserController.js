const UserService = require('../../business/service/UserService');

class UserController {

  static async create(request, response) {
    const result = await UserService.createUser(request.body);
    response.status(201).send(result);
  }

  static async get(request, response) {
    const { id } = request.params;
    const result = await UserService.getUserDataById(id);
    response.status(200).send(result);
  }

  static async getAll(request, response) {
    const { name, email, role } = request.query;
    const result = await UserService.getAllUsers(name, email, role);
    response.status(200).send(result);
  }

  static async update(request, response) {
    const { id } = request.params;
    await UserService.updateUserData(id, request.body);
    response.status(204).send();
  }

  static async delete(request, response) {
    const { id } = request.params;
    await UserService.deleteUser(id);
    response.status(204).send();
  }
};

module.exports = UserController;