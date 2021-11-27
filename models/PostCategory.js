module.exports = (sequelize, _DataTypes) => {
  const PostCategories = sequelize.define('PostCategories',
  {},
  { timestamps: false, underscored: true, tableName: 'PostsCategories' });

  PostCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'post_id',
      through: PostCategories,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'category_id',
      through: PostCategories,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return PostCategories;
};
