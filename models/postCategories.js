module.exports = (sequelize, _DataTypes) => {
    const PostCategories = sequelize.define('PostCategories', {}, { timestamps: false });
    PostCategories.removeAttribute('id');
    return PostCategories;
  };