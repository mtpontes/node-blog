const { CommentModel } = require('../../infra/models');
const Comment = require('../../domain/Comment');

class CommentService {

  static async createComment(text, userId, publicationId) {
    const domain = new Comment(text, userId, publicationId);
    return await CommentModel.create(domain.toLiteral());
  }

  static async getCommentsByPublication(publicationId) {
    return await CommentModel.findAll({ where: { publicationId: publicationId } });
  }

  static async updateComment(id, text) {
    const model = await CommentModel.findByPk(id);
    const domain = Comment.fromLiteral(model.get());
    domain.updateText(text);

    model.set(domain.toLiteral());
    return await model.save();
  }

  static async deleteComment(commentId) {
    await CommentModel.destroy({ where: { id: commentId } });
  }
}

module.exports = CommentService;