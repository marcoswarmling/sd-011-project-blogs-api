const PostsCategory = (sequelize, DataTypes) => {
  const postsCategory = sequelize.define('PostsCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { timestamps: false });

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
     });
     models.PostsCategory.belongsToMany(models.BlogPost, { as: 'blogPosts',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
     });
  };
  
  return postsCategory;
};

module.exports = PostsCategory;