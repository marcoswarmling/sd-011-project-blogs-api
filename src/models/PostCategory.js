module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {}, 
  {
    tableName: 'PostsCategories',
    timestamps: false,
  });
  
  return PostCategory;
};
