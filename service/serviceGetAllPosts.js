const { Users, BlogPosts, Categories } = require('../models');

const serviceGetAllCategories = async () => {
  const caterories = await Categories.findAll();
  return caterories;
};

module.exports = serviceGetAllCategories;