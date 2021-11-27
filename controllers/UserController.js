const db = require('../models');
const JWTgenerate = require('../auth/JWTGenerate');

class UserController {
  static async getAllUsers(_req, res) {
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
      const token = JWTgenerate({ email });
      return res.status(201).json(token);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = UserController;