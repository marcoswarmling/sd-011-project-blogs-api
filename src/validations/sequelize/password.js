module.exports = {
  len: {
    args: [6],
    msg: JSON.stringify({
      message: '"password" length must be 6 characters long',
    }),
  },
  notNull: {
    msg: JSON.stringify({
      message: '"password" is required',
    }),
  },
  notEmpty: {
    msg: JSON.stringify({
      message: '"password" is required',
    }),
  },
};
