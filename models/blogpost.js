module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost',
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      createdAt: { type: DataTypes.DATE, field: 'published' },
      updatedAt: { type: DataTypes.DATE, field: 'updated' },
    },
    {
      timestamps: true,
      tableName: 'BlogPosts',
      underscored: false,
    });

    BlogPost.associate = (models) => BlogPost.belongsTo(models.User, {
        foreignKey: 'userId', as: 'User',
      });

  return BlogPost;
};
