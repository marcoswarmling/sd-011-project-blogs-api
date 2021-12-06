const { Users } = require('../models');

const emailExists = (req, res, next) => {
    const { email } = req.body;
    if (email === undefined) {
        return res.status(400).json({
        message: '"email" is required',
        });
    } if (email.length === 0) {
        return res.status(400).json({
        message: '"email" is not allowed to be empty',
        });
    }

    return next();
};

const passwordIsNotEmpty = (req, res, next) => {
    const { password } = req.body;
    if (password === undefined) {
        return res.status(400).json({
        message: '"password" is required',
        });
    } if (password.length === 0) {
        return res.status(400).json({
        message: '"password" is not allowed to be empty',
        });
    }
    return next();
};

const UserIsValid = (req, res, next) => {
    const { email, password } = req.body;
    Users.findOne({
        where: {
            email,
        },
    })
    .then((user) => {
        if (!user || user.password !== password) {
            return res.status(400).json({
                message: 'Invalid fields',
            });
        }
        return next();
    })
    .catch((_err) => res.status(500).json({
            message: 'Internal server error',
        }));
};

module.exports = {
    emailExists,
    passwordIsNotEmpty,
    UserIsValid,
};