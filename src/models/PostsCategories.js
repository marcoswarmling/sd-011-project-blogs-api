/* eslint-disable no-shadow */

const PostsCategory = (sequelize, DataTypes) => {
  const PostsCategoryS = sequelize.define('PostsCategory', {},
    { timestamps: false });

  PostsCategoryS.associate = (models) => {
    models.BlogPost.belongsToMany(models.User, {
      as: 'users',
      through: 'PostsCategories',
      foreignKey: 'postId',
      otherKey: 'userId',
    });

    models.User.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: 'PostsCategories',
      foreignKey: 'userId',
      otherKey: 'postId',
    });
  };

  return PostsCategoryS;
};

module.exports = PostsCategory;
