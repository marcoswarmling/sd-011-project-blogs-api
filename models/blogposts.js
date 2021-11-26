const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BlogPosts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // associate(models)
    static associate() {
      // define association here
    }
  }
  BlogPosts.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'BlogPosts',
  });
  return BlogPosts;
};