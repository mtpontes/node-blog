const ReplyService = require('../../service/ReplyService');

class CommentController {

  static async create(request, response) {
    const { userId, commentId } = request.params;
    const result = await ReplyService.createReply(userId, commentId, request.body);
    response.status(201).send(result);
  }

  static async get(request, response) {
    const { id } = request.params;
    const result = await ReplyService.getReplyById(id);
    response.status(200).send(result);
  }

  static async getAll(request, response) {
    const results = await ReplyService.getAllReplies();
    response.status(200).send(results);
  }

  static async update(request, response) {
    const { id } = request.params;
    const { text } = request.body;
    const result = await ReplyService.updateReply(id, text);
    response.status(200).send(result);
  }

  static async delete(request, response) {
    const { id } = request.params;
    await ReplyService.deleteReply(id);
    response.status(204).send();
  }
}

module.exports = CommentController;