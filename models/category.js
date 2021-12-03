const Category = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    tableName: 'Categories',
    timestamps: false,
  });

  category.associate = (models) => {
    category.hasMany(models.PostCategory,
      { foreignKey: 'categoryIds', as: 'postcategory' });
  };

  return category;
};

module.exports = Category;