const UserService = require('../../business/service/UserService');
const Pagination = require('../Pagination');

class UserController {

  static async create(request, response, next) {
    try {
      const result = await UserService.createUser(request.body);
      response.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }

  static async get(request, response, next) {
    try {
      const { id } = request.params;
      const result = await UserService.getUserDataById(id);
      response.status(200).send(result);

    } catch (error) {
      next(error);
    }
  }

  static async getAll(request, response, next) {
    try {
      const { name, email, role, page = 1, limit = 10 } = request.query;
      const pagination = new Pagination(page, limit);
      const result = await UserService.getAllUsers({ name, email, role }, pagination);
      response.status(200).send(result);

    } catch (error) {
      next(error);
    }
  }

  static async update(request, response, next) {
    try {
      const { id } = request.params;
      await UserService.updateUserData(id, request.body);
      response.status(204).send();

    } catch (error) {
      next(error);
    }
  }

  static async delete(request, response, next) {
    try {
      const { id } = request.params;
      await UserService.deleteUser(id);
      response.status(204).send();

    } catch (error) {
      next(error);
    }
  }
};

module.exports = UserController;