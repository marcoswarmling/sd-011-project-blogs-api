module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {},
  { timestamps: false, tableName: 'PostsCategories', underscored: true });

  PostCategory.associate = (models) => {
    models.Post.belongsToMany(models.Category, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.Category.belongsToMany(models.Post, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };
};
