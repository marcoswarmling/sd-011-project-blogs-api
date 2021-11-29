const db = require('../models');
const jwtToken = require('../authrization/jwtToken');

const getAllUsers = async (_req, res) => {
  try {
    const allUsers = await db.Users.findAll();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(400).json(error.message); 
  }
};

const createUser = async (req, res) => {
  const newUser = req.body;
  const { email } = newUser;     
    try {
      await db.Users.create(newUser);
      const token = jwtToken({ email });
      return res.status(201).json(token);    
    } catch (error) {
       return res.status(400).json(error.message); 
    }
};

module.exports = {
  getAllUsers,
  createUser,
};