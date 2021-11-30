module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {}, {});
  PostsCategories.removeAttribute('id');
  return PostsCategories;
};
