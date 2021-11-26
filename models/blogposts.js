const postCategorie = (sequelize, DataTypes) => {
  const newPostCategorie = sequelize.define('PostsCategories', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'PostsCategories',
    underscored: true,
  });

  return newPostCategorie;
};

module.exports = postCategorie;