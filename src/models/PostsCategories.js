const PostsCategory = (sequelize, _DataTypes) => {
  const Pcat = sequelize.define('PostsCategory', {},
    { timestamps: false });

  Pcat.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: 'PostsCategory',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: 'PostsCategory',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return Pcat;
};

module.exports = PostsCategory;
