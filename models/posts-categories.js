module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {}, {
    tableName: 'PostsCategories',
    timestamps: false });

  PostCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
    as: 'categories',
    through: PostCategory,
    foreignKey: 'postId',
    otherKey: 'categoryId',
    });
  Category.belongsToMany(BlogPost, {
    as: 'posts',
    through: PostCategory,
    foreignKey: 'categoryId',
    otherKey: 'postId',
    });
  };
  return PostCategory;
};
