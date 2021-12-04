const jwt = require('jsonwebtoken');

const secret = 'senhasecret';

const tokenExists = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: 'Token not found',
        });
    }

    try {
        const decoded = jwt.verify(token, secret);
        const { id } = decoded;
        req.body = { ...req.body, id };
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: 'Expired or invalid token',
        });
    }
};

module.exports = {
    tokenExists,
};