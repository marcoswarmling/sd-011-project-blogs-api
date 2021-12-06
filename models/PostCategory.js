// models/PostCategory.js
module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize
    .define('PostCategory', {}, { timestamps: false, tableName: 'PostsCategories' });

  PostCategory.associate = ({ Category, BlogPost }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

    Category.belongsToMany(BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostCategory;
};