const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model { }

Comments.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      post_content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      post_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: 'post',
            key: 'id',
        }
      },
      user_id: {
          type: DataTypes.INTEGER,
          reference: {
              model: 'user',
              key: 'id',
            }
      },
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'comments',
    }
  );

module.exports = Comments;