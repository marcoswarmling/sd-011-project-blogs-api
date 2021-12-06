const PostsCategories = (sequelize, DataTypes) => {
  const PostsCategorie = sequelize.define(
    'PostsCategories', {
      postId: DataTypes.INTEGER,
    },
    { 
      timestamps: false,
    },
  );

  return PostsCategorie;
};

module.exports = PostsCategories;