const BlogPosts = (sequelize, DataTypes) => {
  const Blog = sequelize.define(
    'BlogPosts',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    { timestamps: false },
  );
  Blog.associate = function (models) {
    Blog.belongsTo(models.Users, {
      foreignKey: 'usedId',
      onDelete: 'CASCADE',
    });
  };
  return Blog;
};

module.exports = BlogPosts;
