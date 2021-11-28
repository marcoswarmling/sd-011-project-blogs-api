/* eslint-disable no-shadow */

const PostsCategory = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {},
    { timestamps: false });

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: 'PostsCategory',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      
    });

    models.Category.belongsToMany(models.BlogPost, {
      through: 'PostsCategory',
      foreignKey: 'categoryId',
      otherKey: 'postId',
     
    });
  };

  return PostsCategory;
};

module.exports = PostsCategory;
