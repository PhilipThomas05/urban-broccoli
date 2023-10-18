const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Listing extends Model {}

Listing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Artist: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    condition: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seller: {
        type: DataTypes.STRING,
        allowNull: false,

      },
    user_id: {
        type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'listing',
  }
);

module.exports = Listing;