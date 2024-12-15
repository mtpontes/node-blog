'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CommentModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CommentModel.belongsTo(models.UserModel, {
        foreignKey: 'userId',
        as: 'user', 
      });
      CommentModel.belongsTo(models.PublicationModel, {
        foreignKey: 'publicationId',
        as: 'publication'
      });
      CommentModel.hasMany(models.ReplyModel, {
        foreignKey: 'commentId',
        as: 'replies'
      });
    }
  }
  CommentModel.init({
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
    publicationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publications', // table name
        key: 'id' // column name
      }
    }
  }, {
    sequelize,
    modelName: 'CommentModel',
    tableName: 'comments'
  });
  return CommentModel;
};