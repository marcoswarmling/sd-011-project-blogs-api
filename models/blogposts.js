const BlogCategories = (sequelize, DataTypes) => {
  const newBlogCategories = sequelize.define('BlogCategories', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'BlogCategories',
    underscored: true,
  });

  return newBlogCategories;
};

module.exports = BlogCategories;