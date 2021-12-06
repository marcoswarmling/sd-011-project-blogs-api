module.exports = (sequelize, _DataTypes) => {
    const PostCategories = sequelize.define('PostCategories', {}, {});
    PostCategories.removeAttribute('id');
    return PostCategories;
  };