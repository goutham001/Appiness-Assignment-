'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    cat_id_pk: {
      primaryKey: true,
      autoincrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cat_name: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'category',
    timestamps: false,
  });
  category.associate = function (models) {
    // associations can be defined here
    //category.hasMany(models.product);
  };
  return category;
};