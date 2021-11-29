const PostCategory = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
}, {
  timestamps: false,
});

postCategory.associate = (models) => {
  postCategory.belongsTo(models.BlogPost, {
    foreignKey: 'postId',
    as: 'blogPost',
  });
  postCategory.belongsTo(models.Category, {
    foreignKey: 'categoryId',
    as: 'category',
  });
};

  return postCategory;
};

module.exports = PostCategory;