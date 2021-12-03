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
    category.hasMany(models.PostsCategory,
      { foreignKey: 'categoryId', as: 'postscategory' });
    
    category.belongsToMany(models.BlogPost, { 
      through: models.PostsCategory,
      foreignKey: 'categoryId',
      as: 'blogposts',
    });
  };

  return category;
};

module.exports = Category;