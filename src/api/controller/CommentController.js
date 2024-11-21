const CommentService = require('../../service/CommentService');

class CommentController {

  static async create(request, response) {
    const { userId, publicationId } = request.params;
    const result = await CommentService.createComment(userId, publicationId, request.body);
    response.status(201).send(result);
  }

  static async get(request, response) {
    const { id } = request.params;
    const result = await CommentService.getCommentById(id);
    response.status(200).send(result);
  }

  static async getAll(request, response) {
    const results = await CommentService.getAllComments();
    response.status(200).send(results);
  }

  static async update(request, response) {
    const { id } = request.params;
    const { text } = request.body;
    const result = await CommentService.updateComment(id, text);
    response.status(200).send(result);
  }

  static async delete(request, response) {
    const { id } = request.params;
    await CommentService.deleteComment(id);
    response.status(204).send();
  }
}

module.exports = CommentController;