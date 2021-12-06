module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  BlogPost.associate = (models) => {
    // digo que a chave FK userId vai se originar da tabela Users
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'Users' });
    // digo que a chave PK dessa tabela vai ser uma FK na tabela PostCategories
    BlogPost.hasMany(models.PostsCategory, { foreignKey: 'postId', as: 'PostCategories' });
  };
 
  return BlogPost;
};