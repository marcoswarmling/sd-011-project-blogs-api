const { Categories } = require('../models');

async function insertCategServ(name) {
  const insertData = await Categories.create({ name });
  return insertData;
}

async function getCategoriesServ() {
  const categoriesData = await Categories.findAll();
  return categoriesData;
}

module.exports = { insertCategServ, getCategoriesServ };