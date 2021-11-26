module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });

  return Categories;
};