const { insertCategServ } = require('../services/categories');

async function insertCategCtrl(req, res) {
  try {
    const { name } = req.body;
    const insertData = await insertCategServ(name);
    return res.status(201).json(insertData.dataValues);
  } catch (error) {
    return res.status(404).json({ error: 'quebrou' });
  }
}

module.exports = {
  insertCategCtrl,
};