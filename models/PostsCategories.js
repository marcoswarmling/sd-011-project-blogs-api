module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {}, {
    timestamps: false,
  });
  PostsCategories.removeAttribute('id');
  return PostsCategories;
};
