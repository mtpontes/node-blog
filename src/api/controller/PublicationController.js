const PublicationService = require('../../service/PublicationService');

class PublicationController {

  static async create(request, response) {
    const { userId } = request.params;
    console.log(userId);
    const result = await PublicationService.createPublication(userId, request.body);
    response.status(201).send(result);
  }

  static async get(request, response) {
    const { id } = request.params;
    const commentLimit = parseInt(request.query.commentLimit) || 2;
    const result = await PublicationService.getPublicationById(id, commentLimit);
    response.status(200).send(result);
  }

  static async getAll(request, response) {
    const { userName, userEmail, fromCreatedAt } = request.query;
    const results = await PublicationService.getAllPublications(userName, userEmail, new Date(fromCreatedAt));
    response.status(200).send(results);
  }

  static async update(request, response) {
    const { id } = request.params;
    const result = await PublicationService.updatePublication(id, request.body);
    response.status(200).send(result);
  }

  static async delete(request, response) {
    const { id } = request.body;
    await PublicationService.deletePublication(id);
    response.status(204).send();
  }
}

module.exports = PublicationController;