const { PublicationModel, UserModel } = require('../../infra/models');
const Publication = require('../../domain/Publication');
const Sequelize = require('sequelize');


class PublicationService {

  static async createPublication(userId, data) {
    const domain = new Publication(null, data.description, data.imageLink, userId);
    return await PublicationModel.create(domain.toLiteral());
  }

  static async getPublicationById(publicationId) {
    return await PublicationModel.findByPk(publicationId);
  }

  static async getAllPublications(params, pagination) {
    const wheres = {};
    if (params.fromCreatedAt && !isNaN(new Date(params.fromCreatedAt).getHours()))
      wheres.createdAt = { [Sequelize.Op.gte]: params.fromCreatedAt };
    if (params.userEmail) {
      const joinUserTableWhereEmail = {
        model: UserModel,
        as: 'user',
        attributes: ['email'],
        where: { email: params.userEmail }
      };
      const result = await PublicationModel.findAndCountAll({
        where: wheres,
        include: joinUserTableWhereEmail,
        limit: pagination.limit,
        offset: pagination.offset
      });
      return pagination.paginatedReturn(result);
    }
    const result = await PublicationModel.findAndCountAll({ where: wheres });
    return pagination.paginatedReturn(result);
  }

  static async updatePublication(id, data) {
    const model = await PublicationModel.findByPk(id);
    const domain = Publication.fromLiteral(model.get());
    domain.updateDescription(data.description);

    model.set(domain.toLiteral());
    return await model.save();
  }

  static async deletePublication(publicationId) {
    await PublicationModel.destroy({ where: { id: publicationId } });
  }
}

module.exports = PublicationService;