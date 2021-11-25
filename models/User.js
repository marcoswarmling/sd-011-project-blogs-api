module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });
  Users.associate = (models) => {
    Users.hasMany(models.BlogPosts,
      { foreignKey: 'userId', as: 'user' });
    };

  return Users;
};
