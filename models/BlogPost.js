module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  { tableName: 'BlogPosts',
    timestamps: false });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user' });
      
    // Não preciso associar? 
    // BlogPost.belongsToMany(models.PostCategory, {
    //   foreignKey: 'postId',
    //   as: 'categories' });
  };

  return BlogPost;
};