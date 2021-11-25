require('dotenv').config();
const { sign } = require('jsonwebtoken');
const { User } = require('../models');
const { validateUniqueEmail } = require('../helpers/validateUniqueEmail');
const { userSchema } = require('../schemas/UserSchema');

module.exports = {
  create: async ({ email, ...userData }) => {
    const { error } = userSchema.validate({ email, ...userData });
    
    if (error) return { error };

    const { alreadyInUse } = await validateUniqueEmail(email);

    if (alreadyInUse) return { error: alreadyInUse };

    const created = await User.create({
      email,
      ...userData,
    });

    if (!created) throw new Error();

    const token = sign(
      { displayName: userData.displayName, email },
      process.env.JWT_SECRET,
      { expiresIn: '7d', algorithm: 'HS256' },
    );

    return { token };
  },
};
