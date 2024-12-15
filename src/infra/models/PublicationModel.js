'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PublicationModel extends Model {
    static associate(models) {
      PublicationModel.belongsTo(models.UserModel, {
        foreignKey: 'userId',
        as: 'user'
      });
      PublicationModel.hasMany(models.CommentModel, {
        foreignKey: 'publicationId',
        as: 'comments'
      });
    }
  }
  PublicationModel.init(
    {
      description: DataTypes.STRING,
      imageLink: DataTypes.STRING,
      edited: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // table name
          key: 'id' // column name
        }
      }
    }, 
    {
      hooks: {
        beforeCreate: (publication) => publication.edited = false,
        beforeUpdate: (publication) => publication.edited = true
      },
      sequelize,
      modelName: 'PublicationModel',
      tableName: 'publications'
    });
  return PublicationModel;
};