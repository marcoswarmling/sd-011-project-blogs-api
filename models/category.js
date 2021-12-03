const Category = (sequelize, DataTypes) => {
  const categoryType = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });
  return categoryType;
};

module.exports = Category;
