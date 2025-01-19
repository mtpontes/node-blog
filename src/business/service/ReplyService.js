const { ReplyModel } = require('../../infra/models');
const Reply = require('../../domain/Reply');

class ReplyService {

  static async createReply(userId, publicationId, data) {
    const domain = new Reply(data.text, userId, publicationId);
    return await ReplyModel.create(domain.toLiteral());
  }

  static async getAllReplies(commentId, pagination) {
    const result = await ReplyModel.findAndCountAll({
      where: { commentId: commentId },
      limit: pagination.limit,
      offset: pagination.offset
    });

    return pagination.paginatedReturn(result);
  }

  static async updateReply(id, text) {
    const model = await ReplyModel.findByPk(id);
    const domain = Reply.fromLiteral(model.get());
    domain.updateText(text);

    model.set(domain.toLiteral());
    return await model.save();
  }

  static async deleteReply(replyId) {
    await ReplyModel.destroy({ where: { id: replyId } });
  }
}

module.exports = ReplyService;