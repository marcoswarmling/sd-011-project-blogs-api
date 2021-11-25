const Category = (sequelize, DataTypes) => {
  const newCategory = sequelize.define('Category', {
    name: DataTypes.STRING,
    
  }, {
    timestamps: false,
    tableName: 'Categories',
    underscored: false,
  });

  return newCategory;
};

module.exports = Category;