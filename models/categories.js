const Categories = (sequelize, DataTypes) => {
  const category = sequelize.define('Categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  }, {
    tableName: 'Categories',
    timestamps: false, // coloco esse objeto infomando para timestamps false, pq o seeders do test está com time stamps false. e quando chega aqui se tiver os timestamps ele coloca automatico e dá erro.
  });
  
  return category;
};

module.exports = Categories;