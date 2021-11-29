const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
  });
  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user', // apelido da chave estrangeira FK para fazer relação no controller, como num eager loading ou lazy loading;
    });
  };
  return blogPost;
};

module.exports = BlogPost;
