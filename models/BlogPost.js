module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes, foreignKey: true },
    // REMOVI NA MIGRATION, ISSO DEVE SER NA QUERY RELACIONAMENTO N:N
    // categoryIds: { type: DataTypes, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  { tableName: 'BlogPosts', timestamps: false });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    
    BlogPost.belongsToMany(models.Category, 
      // O ERRO: O NOME É PostCategory e não PostCategories
      { foreignKey: 'postId', through: models.PostCategory, as: 'categories' });
  };
  
  return BlogPost;
};