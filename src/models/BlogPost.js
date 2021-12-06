module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.NUMBER,
    published: DataTypes.STRING,
    updated: DataTypes.STRING
  },
  {
    tableName: 'BlogPosts',
    timestamps: false,
  });

  BlogPost.associate = ({ Category, PostCategory }) => {
    BlogPost.belongsToMany(Category, {
      through: PostCategory, foreignKey: 'postId', as: 'categories',
    });
  };
  
  return BlogPost;
};
