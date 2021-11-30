const jwt = require('jsonwebtoken');

const secret = 'senhasecret';

const tokenExists = (req, res, next) => {
    const token = req.headers.authorization;
    console.log('TOKEN >>', token);

    if (!token) {
        return res.status(401).json({
            messege: 'Token not found',
        });
    }

    try {
        const decoded = jwt.verify(token, secret);
        console.log(decoded);
    } catch (error) {
        return res.status(400).json({
            message: 'Expired or invalid token',
        });
    }
    next();
};

module.exports = {
    tokenExists,
};