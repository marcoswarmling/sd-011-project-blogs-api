const { User } = require('../models');
const TokenJwt = require('../validations/TokenJwt');

class LoginService {
  constructor() {
    this.user = User;
  }

  async findUserByEmailToLogin(userData) {
    if (!userData.email || !userData.password) {
      return { code: 400, message: 'Email and password are required' };
    }

    const searchUser = await this.user.findOne({ where: { email: userData.email } });
    if (!searchUser || searchUser.dataValues.password !== userData.password) {
      return { code: 400, message: 'Invalid fields' };
    }

    const { id, displayName, email } = searchUser;
    const token = new TokenJwt().generate({ id, displayName, email });

    return { code: 200, data: { token } };
  }
}

module.exports = LoginService;