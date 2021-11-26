module.exports = (sequelize, _DataTypes) => {
  const postCategories = sequelize.define('postCategories',
  {},
  { timestamps: false });

  postCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: postCategories,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'category',
      through: postCategories,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return postCategories;
};
