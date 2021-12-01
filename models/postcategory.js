module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostsCategories', {}, {
    timestamps: false,
  });
  /* Ajuda do Pablo durante o plantão dúvida boba, onde entendi o porque da associação N:N
  desses campos Id das duas tabelas + conteúdo do course do Bloco 29 dia 3. */
  PostCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.BlogPosts.belongsToMany(models.BlogPosts, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return PostCategory;
};