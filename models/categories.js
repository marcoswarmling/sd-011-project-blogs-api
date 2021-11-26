const Categories = (sequelize, DataTypes) => {
  const category = sequelize.define('Categories', {
    name: DataTypes.STRING,
  },
  { timestamps: false });
 // console.log(users, 'USERS');
  return category;
};

module.exports = Categories;