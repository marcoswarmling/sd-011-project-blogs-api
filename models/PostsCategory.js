const PostCategory = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { timestamps: false });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
     });
     models.PostCategory.belongsToMany(models.BlogPost, { as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
     });
  };
  
  return postCategory;
};

module.exports = PostCategory;