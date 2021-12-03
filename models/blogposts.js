module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: DataTypes.NUMBER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.NUMBER, // esse é o id que referência usuário que é o autor do post
    published: DataTypes.NUMBER, 
    updated: DataTypes.NUMBER,
  });

  return BlogPosts;
};
