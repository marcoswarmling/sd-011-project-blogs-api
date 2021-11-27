const LoginService = require('../services/LoginService');

class LoginController {
  constructor() {
    this.loginService = new LoginService();
  }

  async loginUser(req, res) {
    const { code, data, message } = await this.loginService.findUserByEmailToLogin(req.body);
    if (message) {
      res.status(code).json({ message });
    }
    return res.status(code).json(data);
  }
}

module.exports = LoginController;