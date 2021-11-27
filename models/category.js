const Category = (sequelize, DataTypes) => {
  const createCategory = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  return createCategory;
};

module.exports = Category; 