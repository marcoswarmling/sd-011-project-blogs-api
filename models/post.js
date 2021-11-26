const Post = (sequelize, DataTypes) => {
  const newPost = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.DECIMAL,
    categoryId: DataTypes.ARRAY(DataTypes.DECIMAL),
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'Posts',
    underscored: false,
  });

  newPost.associate = (models) => {
    newPost.hasOne(models.Posts,
      { foreignKey: 'user_id', as: 'posts' });
  };

  return newPost;
};

module.exports = Post;