'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      meja.belongsToMany(models.makanan, { through: models.pesanan });
    }
  }
  meja.init(
    {
      name: DataTypes.STRING,
      status_meja: DataTypes.INTEGER,
      status_nota: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'meja',
    }
  );
  return meja;
};
