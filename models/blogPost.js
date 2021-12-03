module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', { 
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE, 
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  }, {
    tableName: 'BlogPosts',
    timestamps: false,
  });

  // Associação ao model de User
  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};