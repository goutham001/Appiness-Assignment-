'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    id_pk: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    cat_id_fk: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'cat_id_pk'
      }
    }
  },
    {
      tableName: 'product',
      modelName: 'singularName',
      timestamps: false
    });
  product.associate = function (models) {
    // associations can be defined here
    product.belongsTo(models.category, { foreignKey: 'cat_id_fk', as: 'prod_cat' });
  };
  return product;
};