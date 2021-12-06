const Users = (sequelize, DataTypes) => {
  const user = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'Users',
    timestamps: false, // coloco esse objeto infomando para timestamps false, pq o seeders do test está com time stamps false. e quando chega aqui se tiver os timestamps ele coloca automatico e dá erro.
  });
  user.associate = (models) => {
    user.hasMany(models.BlogPosts, {
      foreignKey: 'userId',
      as: 'BlogPosts',
    });
  };
  return user;
};

module.exports = Users;