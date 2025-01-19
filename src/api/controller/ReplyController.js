const ReplyService = require('../../business/service/ReplyService');
const Pagination = require('../Pagination');

class CommentController {

  static async create(request, response, next) {
    try {
      const { userId, commentId } = request.params;
      const result = await ReplyService.createReply(userId, commentId, request.body);
      response.status(201).send(result);

    } catch (error) {
      next(error);
    }
  }

  static async getAll(request, response, next) {
    try {
      const { id: commentId } = request.params;
      const { page = 1, limit = 10 } = request.query;
      const pagination = new Pagination(page, limit);

      const results = await ReplyService.getAllReplies(commentId, pagination);
      response.status(200).send(results);

    } catch (error) {
      next(error);
    }
  }

  static async update(request, response, next) {
    try {
      const { id } = request.params;
      const { text } = request.body;
      const result = await ReplyService.updateReply(id, text);
      response.status(200).send(result);

    } catch (error) {
      next(error);
    }
  }

  static async delete(request, response, next) {
    try {
      const { id } = request.params;
      await ReplyService.deleteReply(id);
      response.status(204).send();

    } catch (error) {
      next(error);
    }
  }
}

module.exports = CommentController;