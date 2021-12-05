const PostsCategorie = (sequelize, DataTypes) =>
  sequelize.define(
    'PostsCategories',
    {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    { timestamps: false },
  );

module.exports = PostsCategorie;