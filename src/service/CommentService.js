const { CommentModel, ReplyModel } = require('../models');
const Comment = require('../domain/Comment');

class CommentService {

  static async createComment(userId, publicationId, data) {
    const domain = new Comment(data.text, userId, publicationId);
    const model = await CommentModel.create(domain.toLiteral());
    return model.get();
  }

  static async getCommentById(publicationId) {
    return await CommentModel.findByPk(publicationId,
      { include: [ { model: ReplyModel, as: 'replies' }] },
    );
  }

  static async getAllComments() {
    return await CommentModel.findAll();
  }

  static async updateComment(id, text) {
    const model = await CommentModel.findByPk(id);
    const domain = Comment.fromLiteral(model.get());
    domain.updateText(text);

    model.text = domain.text;
    model.edited = domain.edited;
    return await model.save();
  }

  static async deleteComment(commentId) {
    await CommentModel.destroy({ where: { id: commentId } });
  }
}

module.exports = CommentService;