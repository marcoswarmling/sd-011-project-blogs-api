const categoryServices = require('../services/categoriesServices');
const { SERVER_ERROR } = require('../utils/statusMessage');

const registerCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const response = await categoryServices.registerCategory(name);
    console.log(response);
    return res.status(response.status).json(response.message); 
  } catch (e) {
    console.log(e);
    return res.status(SERVER_ERROR).json({ message: `Server Unavailable ${e.message}` });
  }
};

const getAll = async (_req, res) => {
  try {
    const response = await categoryServices.getAll();
    return res.status(response.status).json(response.message);
  } catch (e) {
    console.log(e);
    return res.status(SERVER_ERROR).json({ message: `Server Unavailable ${e.message}` });
  }
};

module.exports = {
  registerCategory,
  getAll,
};