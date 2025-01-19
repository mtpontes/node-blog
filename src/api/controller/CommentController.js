const CommentService = require('../../business/service/CommentService');
const Pagination = require('../Pagination');

class CommentController {

  static async create(request, response, next) {
    try {
      const { userId, publicationId } = request.params;
      const result = await CommentService.createComment(request.body.text, userId, publicationId);
      response.status(201).send(result);

    } catch (error) {
      next(error);
    }
  }

  static async getAll(request, response, next) {
    try {
      const { id } = request.params;
      const { page, limit } = request.query;
      const pagination = new Pagination(page, limit);

      const results = await CommentService.getCommentsByPublication(id, pagination);
      response.status(200).send(results);

    } catch (error) {
      next(error);
    }
  }

  static async update(request, response, next) {
    try {
      const { id: commentId } = request.params;
      const { text: newText } = request.body;

      const result = await CommentService.updateComment(commentId, newText);
      response.status(200).send(result);

    } catch (error) {
      next(error);
    }
  }

  static async delete(request, response, next) {
    try {
      const { id } = request.params;
      await CommentService.deleteComment(id);
      response.status(204).send();

    } catch (error) {
      next(error);
    }
  }
}

module.exports = CommentController;