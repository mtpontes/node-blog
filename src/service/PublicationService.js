const { PublicationModel, CommentModel, UserModel } = require('../models');
const Publication = require('../domain/Publication');
const Sequelize = require('sequelize');


class PublicationService {

  static async createPublication(userId, data) {
    console.log(`log: ${userId}`);
    const domain = new Publication(null, data.description, data.imageLink, userId);
    return await PublicationModel.create(domain.toLiteral());
  }

  static async getPublicationById(publicationId) {
    return await PublicationModel.findByPk(publicationId);
  }

  static async getAllPublications(userName, userEmail, fromCreatedAt) {
    const wheres = {};
    const associationWhere = {};
    if (fromCreatedAt) wheres.createdAt = { [Sequelize.Op.gte]: fromCreatedAt };
    if (userName) associationWhere.name = { [Sequelize.Op.like]: userName };
    if (userEmail) associationWhere.email = userEmail;

    return await PublicationModel.findAll({ 
      where: wheres,
      include: { 
        model: UserModel, 
        as: 'user', 
        where: associationWhere 
      },
    });
  }

  static async updatePublication(id, data) {
    const model = await PublicationModel.findByPk(id);
    const domain = Publication.fromLiteral(model.get());
    domain.updateDescription(data.description);

    model.description = domain.description;
    return await model.save();
  }

  static async deletePublication(publicationId) {
    await PublicationModel.destroy({ where: { id: publicationId } });
  }
}

module.exports = PublicationService;