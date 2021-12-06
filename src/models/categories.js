module.exports = (sequelize, DataTypes) => {
  const sequelizeCategories = sequelize.define('Categories', {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

sequelizeCategories.associate = (models) => {
  sequelizeCategories.belongsToMany(models.BlogPosts, {
    through: models.PostsCategories, foreignKey: 'categoryId', as: 'posts',
  });
};

return sequelizeCategories;
};
