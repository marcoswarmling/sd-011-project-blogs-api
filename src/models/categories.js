const Categories = (sequelize, DataTypes) => {
  const sequelizeCategories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  return sequelizeCategories;
};

module.exports = Categories;