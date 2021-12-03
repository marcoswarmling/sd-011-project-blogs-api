const PostCategory = (sequelize, _DataTypes) => {
  const postcategory = sequelize.define('PostCategory', {}, { timestamps: false });

  postcategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.BlogPost, {
      as: 'blogpost',
      through: postcategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.Category, {
      as: 'category',
      through: postcategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return postcategory;
};

module.exports = PostCategory;
