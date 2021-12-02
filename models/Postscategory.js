const PostsCategory = (sequelize, DataTypes) => {
  const postsCategory = sequelize.define('PostsCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    timestamps: false,
    table: 'PostCategories',
  });

  return postsCategory;
};

module.exports = PostsCategory;
