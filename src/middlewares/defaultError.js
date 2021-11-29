module.exports = async (err, _req, res, _next) => {
  const { errors: [data] } = err;
    const DEFAULT_STATUS = 400;
    const DEFAULT_MESSAGE = 'invalid entries';
    
    const { status = DEFAULT_STATUS, message = DEFAULT_MESSAGE } = JSON.parse(data.message);

    return res.status(status).json({ message });
};