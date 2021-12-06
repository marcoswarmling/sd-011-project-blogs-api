// models/BlogPost.js
module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    name: DataTypes.STRING,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'BlogPosts',
  });

  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};