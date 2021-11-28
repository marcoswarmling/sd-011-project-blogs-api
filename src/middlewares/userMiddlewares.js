const { Users } = require('../models');
const { tokenJwtIsValid } = require('../auth/validateJWT');

const displayNameLessThanEight = (req, res, next) => {
    if (!req.body.displayName || req.body.displayName.length < 8) {
        return res.status(400).json({
        message: '"displayName" length must be at least 8 characters long',
        });
    }
    next();
};

const emailExists = (req, res, next) => {
    if (!req.body.email) {
        return res.status(400).json({
        message: '"email" is required',
        });
    }
    next();
};

const validateEmail = (req, res, next) => {
    const emailRegex = /^[A-Za-z0-9._]+@([A-Za-z]+\.)[A-Za-z]{2,3}(\.[A-Za-z]{2})?$/;
    if (emailRegex.test(req.body.email) === false) {
        return res.status(400).json({
        message: '"email" must be a valid email',
        });
    }
    next();
};

const passwordExists = (req, res, next) => {
if (!req.body.password) {
    return res.status(400).json({
    message: '"password" is required',
    });
}
next();
};

const passwordHaveSixCharacters = (req, res, next) => {
    if (req.body.password.length !== 6) {
        return res.status(400).json({
        message: '"password" length must be 6 characters long',
        });
    }
    next();
};

const userAlreadyExists = async (req, res, next) => {
    const { email } = req.body;
    try {
    const user = await Users.findOne({ where: { email } });
    if (user) {
        return res.status(409).json({
        message: 'User already registered',
        });
    } 
} catch (err) {
        return res.status(500).json({
        message: 'Internal server error',
        });
    }
  next();
};

const validateJWT = async (req, res, next) => {
    const token = req.headers.authorization;
    const tokenValidate = await tokenJwtIsValid(token);
    if (!token) {
        return res.status(401).json({
        message: 'Token not found',
        });
    } if (tokenValidate === false) {
        return res.status(401).json({
            message: 'Expired or invalid token',
            });
    }

    next();
};

const verifyIdExists = async (req, res, next) => {
    const { id } = req.params;
    try {
    const user = await Users.findOne({ where: { id } });
    if (!user) {
        return res.status(404).json({
        message: 'User does not exist',
        });
    }
} catch (err) {
        return res.status(500).json({
        message: 'Internal server error',
        });
    }
  next();
};

module.exports = {
    passwordHaveSixCharacters,
     passwordExists,
      validateEmail,
       emailExists,
        displayNameLessThanEight,
         userAlreadyExists,
         validateJWT,
         verifyIdExists };