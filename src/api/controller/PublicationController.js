const PublicationService = require('../../business/service/PublicationService');
const Pagination = require('../Pagination');

class PublicationController {

  static async create(request, response, next) {
    try {
      const { userId } = request.params;
      console.log(userId);
      const result = await PublicationService.createPublication(userId, request.body);
      response.status(201).send(result);

    } catch (error) {
      next(error);
    }
  }

  static async get(request, response, next) {
    try {
      const { id } = request.params;
      const result = await PublicationService.getPublicationById(id);
      response.status(200).send(result);

    } catch (error) {
      next(error);
    }
  }

  static async getAll(request, response, next) {
    try {
      const { userEmail, fromCreatedAt, page, limit } = request.query;
      const pagination = new Pagination(page, limit);
      const results = await PublicationService.getAllPublications({ userEmail, fromCreatedAt }, pagination);
      response.status(200).send(results);

    } catch (error) {
      next(error);
    }
  }

  static async update(request, response, next) {
    try {
      const { id } = request.params;
      const result = await PublicationService.updatePublication(id, request.body);
      response.status(200).send(result);

    } catch (error) {
      next(error);
    }
  }

  static async delete(request, response, next) {
    try {
      const { id } = request.params;
      await PublicationService.deletePublication(id);
      response.status(204).send();

    } catch (error) {
      next(error);
    }
  }
}

module.exports = PublicationController;