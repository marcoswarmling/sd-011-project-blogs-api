const Category = (sequelize, DataTypes) => {
  const NewCategory = sequelize.define('Category', {
    name: DataTypes.STRING,
  });

  return NewCategory;
};

module.exports = Category;
