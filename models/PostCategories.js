const PostCategories = (sequelize, _DataTypes) => {
  const Categories = sequelize.define(
    'PostsCategories',
    {},
    { timestamps: false, tableName: 'PostsCategories' },
  );

  Categories.associate = (models) => {
    models.BlogPost.belongsToMany(
      models.Category,
      { as: 'categories', through: Categories, foreignKey: 'id', otherKey: 'id' },
    );

    models.Category.belongsToMany(
      models.BlogPost,
      { as: 'BlogPost', through: Categories, foreignKey: 'id', otherKey: 'id',
      },
    );
  };

  return Categories;
};

module.exports = PostCategories;
