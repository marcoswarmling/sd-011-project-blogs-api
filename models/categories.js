module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, { timestamps: false });
  //   remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
  Categories.associate = (models) => {
    Categories.belongsToMany(models.BlogPosts, {
      foreignKey: 'categoryId',
      as: 'post',
      through: models.PostsCategories,
    });
  };
  return Categories;
};
