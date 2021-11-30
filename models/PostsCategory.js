const PostsCategory = (sequelize, DataTypes) => {
  const postsCategory = sequelize.define('PostsCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { timestamps: false });

  postsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { as: 'categories',
      through: postsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
     });
     models.PostsCategory.belongsToMany(models.BlogPost, { as: 'blogPosts',
      through: postsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
     });
  };
  
  return postsCategory;
};

module.exports = PostsCategory;