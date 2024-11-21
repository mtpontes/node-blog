'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserModel extends Model {
    static associate(models) {
      UserModel.hasMany(models.PublicationModel, {
        foreignKey: 'userId',
        as: 'publications'
      });
      UserModel.hasMany(models.CommentModel, {
        foreignKey: 'userId',
        as: 'comments'
      });
    }
  }
  UserModel.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: DataTypes.ENUM('admin', 'user'),
    name: {
      type: DataTypes.STRING(150),
      autoIncrement: false,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'UserModel',
    tableName: 'users'
  });
  return UserModel;
};