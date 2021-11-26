const Service = require('../services/user');

const createUser = async(req, res) => {
  const data = req.body;
  const result = await Service.createUser(data);

  if(result.message) {
    return res.status(result.status).json({message: result.message});
  }
  return res.status(201).json(result);
};


module.exports = {
  createUser,
}