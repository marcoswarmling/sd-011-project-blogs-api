const PostsCategories = (sequelize, _DataTypes) => {
  const categorie = sequelize.define('PostsCategorie',
  {},
  { tableName: 'PostsCategories', timestamps: false });

  categorie.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: categorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    
    models.Categories.belongsToMany(models.BlogPosts, {
      through: categorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return categorie;
};

module.exports = PostsCategories;