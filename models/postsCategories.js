const PostsCategories = (sequelize, DataTypes) => {
  const postsCategories = sequelize.define('PostsCategories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });

  return postsCategories;
};

module.exports = PostsCategories;