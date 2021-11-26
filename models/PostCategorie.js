const PostsCategorie = (sequelize, DataTypes) =>
  sequelize.define(
    'PostsCategorie',
    {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    { timestamps: false },
  );

module.exports = PostsCategorie;
