'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReplyModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReplyModel.belongsTo(models.UserModel, {
        foreignKey: 'userId',
        as: 'user', 
      });
      ReplyModel.belongsTo(models.CommentModel, {
        foreignKey: 'commentId',
        as: 'comment'
      });
    }
  }
  ReplyModel.init({
    text: DataTypes.STRING,
    edited: DataTypes.BOOLEAN,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users', // table name
        key: 'id' // column name
      }
    },
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comments', // table name
        key: 'id' // column name
      }
    }
  }, {
    sequelize,
    modelName: 'ReplyModel',
    tableName: 'replies'
  });
  return ReplyModel;
};