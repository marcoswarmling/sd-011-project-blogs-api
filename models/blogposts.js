module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER, // esse é o id que referência usuário que é o autor do post
    published: DataTypes.DATE, 
    updated: DataTypes.DATE,
  }, {
    timestamps: false, 
    tableName: 'BlogPosts',
});

  return BlogPosts;
};
