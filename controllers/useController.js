const UserServices = require('../services/UserService');

class UserController {
  constructor() {
    this.userServices = new UserServices();
  }

  async getAllUsers(req, res) {
    const { code, data, message } = await this.userServices.getAllUsers(req.headers.authorization);
    if (message) {
      return res.status(code).json({ message });
    }
    return res.status(code).json(data);
  }

  async getUserById(req, res) {
    const token = req.headers.authorization;
    const { id } = req.params;
    const { code, data, message } = await this.userServices.getUserById(id, token);
    if (message) {
      return res.status(code).json({ message });
    }
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

  async deleteUser(req, res) {
    const { code, message } = await this.userServices.deleteUser(req.headers.authorization);
    if (message) {
      return res.status(code).json({ message });
    }
    return res.status(code).json();
  }
}

module.exports = UserController;