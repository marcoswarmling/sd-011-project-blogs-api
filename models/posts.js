const Post = (sequelize, DataTypes) => {
  const newPost = sequelize.define('Post', {
    title: DataTypes.STRING,
    categoryIds: DataTypes.ARRAY(DataTypes.DECIMAL),
    content: DataTypes.STRING,
    userId: DataTypes.DECIMAL,
  }, {
    timestamps: true,
    tableName: 'Posts',
  });

  newPost.associate = (models) => {
    newPost.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'users' });
  };
  
  return newPost;
};

module.exports = Post;