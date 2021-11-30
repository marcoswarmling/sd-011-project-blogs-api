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

  async getUserById(id, token) {
    try {
      if (token === undefined || token.length === this.zero) {
        return { code: 401, message: 'Token not found' };
      }
      this.token.validate(token);
      const data = await this.user.findByPk(id);
      if (!data) {
        return { code: 404, message: 'User does not exist' };
      }
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

  async deleteUser(token) {
    try {
      if (token.length === this.zero) {
        return { code: 401, message: 'Token not found' };
      }
      const { id } = this.token.validate(token);
      const user = await this.user.findByPk(id);
      if (!user) {
        return { code: 404, message: 'User does not exist' };
      }
      await this.user.destroy({ where: { id } });
      return { code: 204, message: 'User deleted' };
    } catch (error) {
      return { code: 401, message: 'Expired or invalid token' };
    }
  }
}

module.exports = UserServices;