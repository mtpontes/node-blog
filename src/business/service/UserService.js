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

  static async getAllUsers(name, email, role) {
    const wheres = {};
    if (name) wheres.name = { [Op.like]: `%${name}%` };
    if (email) wheres.email = { [Op.like]: `%${email}%` };
    if (role) wheres.role = role;

    return await UserModel.findAll({ where: wheres });
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