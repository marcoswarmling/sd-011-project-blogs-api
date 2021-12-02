const PostsCategories = (sequelize, _DataTypes) => {
  const categorie = sequelize.define('PostsCategorie',
  {},
  { tableName: 'PostsCategories', timestamps: false });

  categorie.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'Categories',
      through: categorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'posts',
      through: categorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return categorie;
};

module.exports = PostsCategories;