const PostsCategories = (sequelize, DataTypes) => {
  const PostsCategorie = sequelize.define(
    'PostsCategories', {
      postId: DataTypes.NUMBER,
    },
    { 
      timestamps: false,
    },
  );

  return PostsCategorie;
};

module.exports = PostsCategories;