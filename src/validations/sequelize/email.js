module.exports = {
  notNull: {
    msg: JSON.stringify({ message: '"email" is required' }),
  },
  notEmpty: {
    msg: JSON.stringify({ message: '"email" is required' }),
  },
  isEmail: {
    msg: JSON.stringify({ message: '"email" must be a valid email' }),
  },
};
