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
        jwt.verify(token, secret);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: 'Expired or invalid token',
        });
    }

    // jwt.verify(token, secret) => {
    //     if (err) {
    //         return res.status(401).json({
    //             messege: 'Expired of invalid token',
    //         });
    //     }
    // });
};

module.exports = {
    tokenExists,
};