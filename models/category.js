const Category = (sequelize, DataTypes) => {
  const Category1 = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, { timestamps: false });

  return Category1;
};

module.exports = Category;