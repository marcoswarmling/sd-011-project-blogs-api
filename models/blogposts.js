const getId = (DataTypes) => ({
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
});

const getUserId = (DataTypes) => ({ type: DataTypes.INTEGER, foreignKey: true });

module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: getId(DataTypes),
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: getUserId(DataTypes),
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    tableName: 'BlogPosts',
    timestamps: false,
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPosts;
};
