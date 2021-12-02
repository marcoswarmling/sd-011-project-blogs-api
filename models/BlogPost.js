module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      // categoryIds: DataTypes.INTEGER,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
  }, {
      timestamps: false,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' }); // atenção
    // Post.belongsToMany(models.Category, { foreignKey: 'categoryIds', as: 'category' });
  };
  
  return BlogPost;
};