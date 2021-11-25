const { User } = require('../models');
const { validateUniqueEmail } = require('../helpers/validateUniqueEmail');
const { userSchema } = require('../validationSchemas/userSchema');
const { generateToken } = require('../helpers/token');

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

    const token = await generateToken(userData.displayName, email);

    return { token };
  },
  index: async () => {
    const users = await User.findAll();

    if (!users) return { error: true };

    return { users };
  },
};
