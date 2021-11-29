module.exports = (sequelize, DataTypes) => {
  const modelCategories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  return modelCategories;
};
