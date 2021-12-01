const PostsCategories = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define('PostsCategories',
  { postId: DataTypes.INTEGER },
  { timestamps: false, tableName: 'PostsCategories' });
  PostsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: postsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: postsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return postsCategories;
};

module.exports = PostsCategories;