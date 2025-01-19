const { Op } = require('sequelize');
const { UserModel } = require('../../infra/models');
const User = require('../../domain/User');

class UserService {

  static async createUser(data) {
    return await UserModel.create(User.fromLiteral(data).toLiteral());
  }

  static async getUserDataById(id) {
    return await UserModel.findByPk(id);
  }

  static async getAllUsers(queryParams, pagination) {
    const wheres = {};
    if (queryParams.name) wheres.name = { [Op.like]: `%${queryParams.name}%` };
    if (queryParams.email) wheres.email = { [Op.like]: `%${queryParams.email}%` };
    if (queryParams.role) wheres.role = queryParams.role;

    const result = await UserModel.findAndCountAll({
      where: wheres,
      offset: pagination.offset,
      limit: pagination.limit
    });

    return pagination.paginatedReturn(result);
  }

  static async updateUserData(id, body) {
    const model = await UserModel.findByPk(id);
    const domain = User.fromLiteral(model.get());
    domain.updateName(body.name);

    model.set(domain.toLiteral());
    return await model.save();
  }

  static async deleteUser(id) {
    return await UserModel.destroy({ where: { id: id } });
  }
}

module.exports = UserService;