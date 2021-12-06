module.exports = (sequelize, _DataTypes) => {
  const BlogpostCategory = sequelize.define('BlogpostCategory', {}, { timestamps: false });

  BlogpostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: BlogpostCategory,
      foreignKey: 'categoryId',
      otherKey: 'blogpostId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: BlogpostCategory,
      foreignKey: 'blogpostId',
      otherKey: 'categoryId',
    });
  };

  return BlogpostCategory;
};
