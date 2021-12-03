const BlogPost = (sequelize, DataTypes) => {
  const blogpost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    tableName: 'BlogPosts',
    timestamps: false,
  });

  blogpost.associate = (models) => {
    blogpost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return blogpost;
};

module.exports = BlogPost;
