module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING, // tem quer ser único
    password: DataTypes.NUMBER,
    image: DataTypes.STRING, 
  },
  {
    timestamps: false,
    tableName: 'Users',
    // underscored: true,
  }, {});
  users.associate = (models) => {
    users.hasMany(models.BlogPosts, { foreignKey: 'userId', as: 'posts' });
  };
  return users;
};
