const Post = (sequelize, DataTypes) => {
  const createPost = sequelize.define(
    'BlogPost',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      timestamps: false,
      tableName: 'BlogPosts',
    },
  );

  createPost.associate = (models) => {
    createPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  
  return createPost;
};

module.exports = Post;
