const PostsCategory = (sequelize, _DataTypes) => {
  const postsCategory = sequelize.define('PostsCategories', {}, { timestamps: false });

  postsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: 'PostsCategories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: 'PostsCategories',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return postsCategory;
};

module.exports = PostsCategory;