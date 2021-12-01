const { jwt, jwtConfig } = require('../auth/validateJWT');
const { User } = require('../models');

const findOrCreate = async (displayName, email, password, image) => {
  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { displayName, email, password, image },
  });

  if (!created) {
    throw new Error('userAlreadyRegistered');
  }

  const token = jwt.sign(
    { data: { displayName: user.displayName, email: user.email } },
    process.env.SECRET,
    jwtConfig,
  );

  return token;
};

module.exports = {
  findOrCreate,
};
