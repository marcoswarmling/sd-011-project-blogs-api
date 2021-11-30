const BlogPosts = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPosts',
    { title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, { timestamps: false },
  );
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.Users, {
      as: 'User', foreignKey: 'usedId', onDelete: 'CASCADE',
    });
    BlogPost.hasMany(models.PostsCategories, {
      as: 'PostsCategory', foreignKey: 'postId',
    });
  };
  return BlogPost;
};

module.exports = BlogPosts;
