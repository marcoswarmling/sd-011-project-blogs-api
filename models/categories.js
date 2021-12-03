const categories = (sequelize, DataTypes) => sequelize.define('Categories',
  {
    name: DataTypes.STRING,
  },
  {
    timestamps: false, // createdAt e updatedAt
  });

module.exports = categories;
