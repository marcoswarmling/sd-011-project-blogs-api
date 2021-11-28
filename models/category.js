const Category = (sequelize, DataTypes) => {
  const Category1 = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, { timestamps: false });
  
  Category1.associate = (models) => {
    Category1.belongsToMany(models.BlogPost, {
      through: models.PostsCategory, foreignKey: 'categoryId', as: 'posts',
    });
  };
  
  return Category1;
};

module.exports = Category;