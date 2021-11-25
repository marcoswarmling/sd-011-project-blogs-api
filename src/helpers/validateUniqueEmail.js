const { User } = require('../models');
const { emailAlreadyUsed } = require('../errors');

async function validateUniqueEmail(email) {
  let alreadyInUse = false;

  const emailInUse = await User.findOne({
    where: { email },
  });

  if (emailInUse) alreadyInUse = emailAlreadyUsed;

  return { alreadyInUse };
}

module.exports = { validateUniqueEmail };
