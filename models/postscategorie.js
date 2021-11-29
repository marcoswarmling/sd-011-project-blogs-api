const PostsCategory = (sequelize, DataTypes) => {
  const postsCategory = sequelize.define('PostsCategory',
  { postId: DataTypes.INTEGER },
  { timestamps: false });

  postsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: postsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return postsCategory;
};

module.exports = PostsCategory;