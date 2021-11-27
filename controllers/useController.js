const UserServices = require('../services/UserService');

class UserController {
  constructor() {
    this.userServices = new UserServices();
  }

  async getAllUsers(_req, res) {
    const { code, data } = await this.userServices.getAllUsers();
    return res.status(code).json(data);
  }

  async createUser(req, res) {
    try {
      const { code, data, message } = await this.userServices.createUser(req.body);
      if (message) {
        res.status(code).json({ message });
      }
      return res.status(code).json(data);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = UserController;