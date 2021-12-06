const Category = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  category.associate = (models) => {
    category.belongsToMany(models.BlogPost, {
      through: models.PostsCategory,
      foreignKey: 'categoryId',
      as: 'posts',
    });
  };

  return category;
};

module.exports = Category;
