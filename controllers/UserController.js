const db = require('../models');
const JWTgenerate = require('../auth/JWTGenerate');

class UserController {
  static async getAllUsers(req, res) {
    try {
      const allUsers = await db.Users.findAll();
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async createUser(req, res) {
    const newUser = req.body;
    const { email } = newUser;
    try {
      await db.Users.create(newUser);
      const getNewUser = await db.Users.findOne({
        where: { email },
      });
      const { id, displayName, image } = getNewUser;
      const token = JWTgenerate({ id, displayName, email, image });
      return res.status(201).json(token);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async getUserById(req, res) {
    const { id } = req.params;
    
    const findedUser = await db.Users.findOne({ where: { id } });
    
    if (findedUser) {
      return res.status(200).json(findedUser);
    }
      return res.status(404).json({ message: 'User does not exist' });
  }
}

module.exports = UserController;