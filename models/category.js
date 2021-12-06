module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  Category.associate = (models) => {
    // associo que a chave id, vai virar uma FK na tabela postscaterory
    Category.hasMany(
      models.PostsCategory,
      { foreignKey: 'categoryId', as: 'Categories' },
    );
  };

  return Category;
};