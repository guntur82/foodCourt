'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pesanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pesanan.init({
    mejaId: DataTypes.INTEGER,
    makananId: DataTypes.INTEGER,
    jumlah: DataTypes.INTEGER,
    status_makanan: DataTypes.INTEGER,
    status_pesanan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pesanan',
  });
  return pesanan;
};