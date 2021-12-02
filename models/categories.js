const Categories = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categories', {
    category_id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  });

  return categories;
};

module.exports = Categories;