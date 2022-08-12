'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class makanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      makanan.belongsToMany(models.bahan, { through: models.bahan_baku });
      makanan.belongsToMany(models.meja, { through: models.pesanan });
    }
  }
  makanan.init(
    {
      name: DataTypes.STRING,
      harga: DataTypes.INTEGER,
      foto: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'makanan',
    }
  );
  return makanan;
};
