module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  },
  {
    tableName: 'Categories',
    timestamps: false,
  });

  Category.associate = ({ BlogPost, PostCategory }) => {
    Category.belongsToMany(BlogPost, {
      through: PostCategory, foreignKey: 'categoryId', as: 'posts',
    });
  };

  return Category;
};
