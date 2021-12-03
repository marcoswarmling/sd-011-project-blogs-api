'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BlogPosts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BlogPosts.init({
    id: DataTypes.NUMBER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.NUMBER, // esse é o id que referência usuário que é o autor do post
    published: DataTypes.NUMBER, 
    updated: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'BlogPosts',
  });
  return BlogPosts;
};