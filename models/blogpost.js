const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    blogPostId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
    underscored: true,
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreignKey: {
        name: 'id'
      }
    });
  };

  return blogPost;
};

module.exports = BlogPost;