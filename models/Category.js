module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true },
  },
  {
    timestamps: false,
  });
  Category.associate = (models) => {
    Category.hasMany(models.PostCategory,
      { foreignKey: 'categoryId', as: 'PostCategories' });
  };
  return Category;
};