module.exports = (sequelize, DataTypes) => {
    const categories = sequelize.define('Categories', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
    },
      { timestamps: false });
    return categories; 
  };