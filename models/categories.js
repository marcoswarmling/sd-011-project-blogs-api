const Categories = (sequelize, DataTypes) => {
  const categories = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false, tableName: 'Categories',
  });
  return categories;
};

module.exports = Categories;