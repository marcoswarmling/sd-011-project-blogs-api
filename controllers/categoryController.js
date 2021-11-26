const categoryServices = require('../services/categoryServices');

const registerCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const registeredCat = await categoryServices.registerCategory(name);
    return res.status(201).json(registeredCat); 
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Server Offline' });
  }
};

module.exports = {
  registerCategory,
};
