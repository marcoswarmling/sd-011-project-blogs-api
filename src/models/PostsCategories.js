/* eslint-disable no-shadow */

const PostsCategory = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define(
    'PostsCategory',
    {},
    { timestamps: false },
  );

  PostsCategory.associate = (models) => {
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

  return PostsCategory;
};

module.exports = PostsCategory;
