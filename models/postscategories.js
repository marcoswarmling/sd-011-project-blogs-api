const postCategorie = (sequelize, DataTypes) => {
  const newPostCategorie = sequelize.define('PostsCategories', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'PostsCategories',
    underscored: true,
  });

  return newPostCategorie;
};

module.exports = postCategorie;