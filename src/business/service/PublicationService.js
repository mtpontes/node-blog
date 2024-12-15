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

  static async getAllPublications(userEmail, fromCreatedAt) {
    const wheres = {};
    const joinWhere = {};
    if (fromCreatedAt && !isNaN(new Date(fromCreatedAt).getHours()))
      wheres.createdAt = { [Sequelize.Op.gte]: fromCreatedAt };
    if (userEmail) {
      joinWhere.email = userEmail;
      const joinUserTable = {
        model: UserModel,
        as: 'user',
        attributes: ['email'],
        where: joinWhere
      };
      return PublicationModel.findAll({ where: wheres, include: joinUserTable });
    }
    return PublicationModel.findAll({ where: wheres });
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