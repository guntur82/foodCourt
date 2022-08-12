'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bahan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bahan.belongsToMany(models.makanan, { through: models.bahan_baku });
    }
  }
  bahan.init(
    {
      name: DataTypes.STRING,
      stok: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'bahan',
    }
  );
  return bahan;
};
