const db = require('../models');
const jwt = require('../auth/jwt');

class controllerLogin {
  static async login(req, res) {
    const { email } = req.body;
    try {
      const user = await db.Users.findOne({
        where: { email },
      });
      const { id, displayName, image } = user;
      const token = jwt({ id, displayName, email, image });
      console.log(token);
      return res.status(200).json(token);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = controllerLogin;