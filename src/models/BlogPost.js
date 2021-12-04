const BlogPost = (sequelize, DataTypes) => {
  const PostModel = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE, 
  }, {
    timestamps: false,
  });

  PostModel.associate = (models) => {
    PostModel.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  return PostModel;
};

module.exports = BlogPost;
