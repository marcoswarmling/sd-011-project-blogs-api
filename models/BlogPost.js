const BlogPost = (sequelize, DataTypes) =>
  sequelize.define(
    'BlogPost',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      created: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    { timestamps: false },
  );

module.exports = BlogPost;
