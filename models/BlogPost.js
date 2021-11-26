module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    name: DataTypes.STRING,
  }, {
    timstamps: false,
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      {
        foreignKey: 'user_id', as: 'user',
      });
  };

  return BlogPost;
};