module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    title: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    name: DataTypes.STRING,
  }, {
    timstamps: false,
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      {
        foreignKey: 'id', as: 'user',
      });
  };

  return BlogPost;
};