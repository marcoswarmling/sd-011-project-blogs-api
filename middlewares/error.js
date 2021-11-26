module.exports = (err, _req, res, _next) => {
  const decode = {
    'ER_DUP_ENTRY': {status: 409, message: 'User already registered'}
  };
  console.log(err.parent);
  console.log(err.code, 'code');

  const response = decode[err.parent.code];
  return res.status(response.status).json({message: response.message});
};