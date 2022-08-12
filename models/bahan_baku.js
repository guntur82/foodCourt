'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bahan_baku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bahan_baku.belongsTo(models.bahan);
      bahan_baku.belongsTo(models.makanan);
    }
  }
  bahan_baku.init(
    {
      makananId: DataTypes.INTEGER,
      bahanId: DataTypes.INTEGER,
      jumlah: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'bahan_baku',
    }
  );
  return bahan_baku;
};
