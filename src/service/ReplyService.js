const { ReplyModel, CommentModel } = require('../models');
const Reply = require('../domain/Reply');

class ReplyService {

  static async createReply(userId, publicationId, data) {
    const domain = new Reply(data.text, userId, publicationId);
    const model = await ReplyModel.create(domain.toLiteral());
    return model.get();
  }

  static async getReplyById(publicationId) {
    return await ReplyModel.findByPk(publicationId)
      .then(data => data.get());
  }

  static async getAllReplies() {
    return await ReplyModel.findAll();
  }

  static async updateReply(id, text) {
    const model = await ReplyModel.findByPk(id);
    const domain = Reply.fromLiteral(model.get());
    domain.updateText(text);

    model.text = domain.text;
    model.edited = domain.edited;
    return await model.save();
  }

  static async deleteReply(replyId) {
    await ReplyModel.destroy({ where: { id: replyId } });
  }
}

module.exports = ReplyService;