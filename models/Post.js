module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('BlogPosts', {
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.STRING, allowNull: false },
    published: { type: DataTypes.TIME },
    update: { type: DataTypes.TIME },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  }, {
    tableName: 'BlogPosts',
    timestamps: false,
  });
  console.log('rodou modelo ==> ', sequelize.models);
  return Post;
};
