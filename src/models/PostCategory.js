module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', { postId: 
    { type: DataTypes.INTEGER, references: { model: 'BlogPost', key: 'id' } },
  categoryId: { type: DataTypes.INTEGER, references: { model: 'Category', key: 'id' } } },
  { timestamps: false, tableName: 'PostsCategories' });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};
