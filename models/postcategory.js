const PostsCategory = (sequelize, DataTypes) => {
  const PostsCategory1 = sequelize.define('PostsCategory', {
    postId: DataTypes.INTEGER,
  });

  PostsCategory1.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { 
      as: 'categories',
      through: PostsCategory1,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, { 
      as: 'blogposts',
      through: PostsCategory1,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategory1;
};

module.exports = PostsCategory;