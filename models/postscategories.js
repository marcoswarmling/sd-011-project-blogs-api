const PostsCategories = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {},
  { timestamps: false });

  PostsCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, { 
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.Categories.belongsToMany(models.BlogPosts, { 
      as: 'blogposts',
      through: PostsCategory,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return PostsCategory;
};

module.exports = PostsCategories;
