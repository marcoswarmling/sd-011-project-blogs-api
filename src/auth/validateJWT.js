const jwt = require('jsonwebtoken');

require('dotenv/config');

const secret = process.env.JWT_SECRET;

const tokenJwtIsValid = (token) => {
    try {
        const decoded = jwt.verify(token, secret);
        return decoded;
    } catch (error) {
        return false;
    }
    };

    module.exports = {
        tokenJwtIsValid,
    };