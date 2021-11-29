const PostCategories = (sequelize, _DataTypes) => {
  const postCategory = sequelize.define('PostCategories', {},
  { 
    timestamps: false,
  });

  return postCategory;
};

module.exports = PostCategories;