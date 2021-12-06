const PostsCategory = (sequelize, _DataTypes) => {
  const postcategory = sequelize.define('PostsCategories', {}, { timestamps: false });
  postcategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, { 
      as: 'categories',
      through: 'PostsCategories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Categories.belongsToMany(models.BlogPosts, { 
      as: 'BlogPosts',
      through: 'PostsCategories',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return postcategory;
};

module.exports = PostsCategory;

// Super Marcelo Leite, me ajudou a entender associations e realizar o requisito 8.