const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      post_content: {
        type: DataTypes.STRING,
      },
      date_posted: {
        type: DataTypes.DATE,
        allowNull: false,
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
      modelName: 'user',
    }
  );

module.exports = Post;