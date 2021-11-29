const PostCategory = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, { timestamps: false });

  return postCategory;
};

PostCategory.associate = (models) => {
  models.BlogPost.belongstToMany(models.Category, { as: 'categories',
    through: PostCategory,
    foreignKey: 'postId',
    otherKey: 'categoryId',
   });
   models.PostCategory.belongstToMany(models.BlogPost, { as: 'blogPosts',
    through: PostCategory,
    foreignKey: 'categoryId',
    otherKey: 'postId',
   });
};

module.exports = PostCategory;