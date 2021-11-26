module.exports = (sequelize, _DataTypes) => {
  const postCategories = sequelize.define('postCategories',
  {},
  { timestamps: false, underscored: true });

  postCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'post_id',
      through: postCategories,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'category_id',
      through: postCategories,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return postCategories;
};
