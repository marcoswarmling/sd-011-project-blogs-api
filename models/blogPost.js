module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', { 
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    update: DataTypes.DATE, 
    userId: DataTypes.INTEGER,
  }, {
    tableName: 'BlogPosts',
    timestamps: false,
  });

  // Associação ao model de User
  BlogPost.associate = ({ User }) => {
    // A publicação pertence a um User
    // refencia na chave estrangeira, apresentada com nome (as)
    BlogPost.belongsTo(User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};