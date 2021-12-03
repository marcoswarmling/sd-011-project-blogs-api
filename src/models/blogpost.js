const blogPosts = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
  });
// Obs.: Eu não criei a associação "hasOne" na outra tabela ainda.

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.user, { // Talves seja com 'u' maiúsculo, se referencia ao nome da tabela
      foreignKey: 'userId', as: 'user',
    });
  };

  return blogPost;
};

module.exports = blogPosts;