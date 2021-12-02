const redexValidation = require('../functions');

const userValidation = (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length <= 8) {
        res.status(400).json({
            message: '"displayName" length must be at least 8 characters long',
        });
    }
    next();
};

const userEmailValidation = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({
            message: '"email" is required',
        });
    }
    if (!redexValidation.validateEmailRequisitos(email)) {
        return res.status(400).json({
            message: '"email" must be a valid email',
        });
    }
    next();
};

const userPasswordValidations = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        res.status(400).json({
            message: '"password" is required',
        });
    }
    if (password.length < 6) {
        res.status(400).json({
            message: '"password" length must be 6 characters long',
        });
    }
    next();
};

module.exports = {
    userValidation,
    userEmailValidation,
    userPasswordValidations,
};