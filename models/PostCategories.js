module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define(
    'PostsCategories',
    {},
    { timestamps: false, tableName: 'PostsCategories', underscored: true },
  );

  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(
      models.Categories,
      { as: 'categories', through: PostsCategories, foreignKey: 'id', otherKey: 'id' },
    );

    models.Categories.belongsToMany(
      models.BlogPosts,
      { as: 'blogPosts', through: PostsCategories, foreignKey: 'id', otherKey: 'id',
      },
    );
  };

  return PostsCategories;
};
