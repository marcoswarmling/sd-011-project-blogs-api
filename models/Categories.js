module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.INTEGER,
  }, {
    tableName: 'Categories',
    timestamps: false,
  });

  return Category;
};
