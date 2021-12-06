module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false, tableName: 'Users' });
  Users.associate = (models) => {
    Users.hasMany(models.BlogPosts, 
      { foreignKey: 'userId', as: 'user' });
  };
  return Users;
};

// https://sequelize.org/master/manual/model-basics.html
// https://sequelize.org/master/manual/validations-and-constraints.html
