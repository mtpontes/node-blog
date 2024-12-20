const CommentService = require('../../business/service/CommentService');

class CommentController {

  static async create(request, response) {
    const { userId, publicationId } = request.params;
    const result = await CommentService.createComment(request.body.text, userId, publicationId);
    response.status(201).send(result);
  }

  static async getAll(request, response) {
    const { id: publicationId } = request.params;
    const results = await CommentService.getCommentsByPublication(publicationId);
    response.status(200).send(results);
  }

  static async update(request, response) {
    const { id: commentId } = request.params;
    const { text: newText } = request.body;

    const result = await CommentService.updateComment(commentId, newText);
    response.status(200).send(result);
  }

  static async delete(request, response) {
    const { id } = request.params;
    await CommentService.deleteComment(id);
    response.status(204).send();
  }
}

module.exports = CommentController;