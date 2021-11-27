const { User } = require('../models');

class UserServices {
 constructor() {
  this.user = User;
  }

  async getAllUsers() {
    const data = await this.user.findAll();
    return { code: 200, data };
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