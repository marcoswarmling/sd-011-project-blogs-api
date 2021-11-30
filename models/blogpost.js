module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATA,
    userId: { type: DataTypes.INTEGER, foreignkey: true },
    updated: DataTypes.DATA,
  },
  {
    tableName: 'BlogPosts',
    timestamps: false,
  });

  return BlogPost;
};
