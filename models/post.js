const Post = (sequelize, DataTypes) => {
  const newPost = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    categoryIds: DataTypes.ARRAY(DataTypes.DECIMAL),
    userId: DataTypes.DECIMAL,
  },
  {
    timestamps: false,
    tableName: 'Posts',
  });

  newPost.associate = (models) => {
    newPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users' });
  };

  return newPost;
};

module.exports = Post;
