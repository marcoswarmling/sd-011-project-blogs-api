module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      timestamps: true,
      modelName: 'BlogPosts',
      underscored: false,
      createdAt: 'published',
      updatedAt: 'updated',
    });
  return BlogPosts;
};
