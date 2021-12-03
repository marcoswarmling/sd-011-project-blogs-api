const { Categories } = require('../models');

async function insertCategServ(name) {
  const insertData = await Categories.create({ name });
  return insertData;
}

module.exports = { insertCategServ };