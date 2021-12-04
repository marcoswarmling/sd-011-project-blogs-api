const { insertCategServ, getCategoriesServ } = require('../services/categories');

async function insertCategCtrl(req, res) {
  try {
    const { name } = req.body;
    const insertData = await insertCategServ(name);
    return res.status(201).json(insertData.dataValues);
  } catch (error) {
    return res.status(404).json({ error: 'quebrou' });
  }
}

async function getCategoriesCtrl(_req, res) {
  try {
    const categoriesData = await getCategoriesServ();
    return res.status(200).json(categoriesData);
  } catch (error) {
    return res.status(404).json({ error: 'error' });
  }
}

module.exports = {
  insertCategCtrl,
  getCategoriesCtrl,
};