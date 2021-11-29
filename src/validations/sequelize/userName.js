module.exports = {
  len: {
    args: [8, 50],
    msg: JSON.stringify({
      message: '"displayName" length must be at least 8 characters long',
    }),
  },
  notNull: {
    msg: JSON.stringify({
      message: '"displayName" is required',
    }),
  },
  notEmpty: {
    msg: JSON.stringify({
      message: '"displayName" is required',
    }),
  },
};
