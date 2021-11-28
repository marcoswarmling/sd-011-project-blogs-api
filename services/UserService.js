const { User } = require('../models');
const TokenJWT = require('../validations/TokenJwt');

class UserServices {
  constructor() {
    this.user = User;
    this.token = new TokenJWT();
    this.zero = 0;
  }

  async getAllUsers(token) {
    try {
      if (token === undefined || token.length === this.zero) {
        return { code: 401, message: 'Token not found' };
      }
      this.token.validate(token);
      const data = await this.user.findAll();
      return { code: 200, data };
    } catch (error) {
      return { code: 401, message: 'Expired or invalid token' };
    }
  }

  async createUser(userData) {
    const userExists = await this.user.findOne({ where: { email: userData.email } });
    if (userExists) {
      return { code: 409, message: 'User already registered' };
    }
    const user = await this.user.create(userData);
    return { code: 201, data: user };
  }
}

module.exports = UserServices;