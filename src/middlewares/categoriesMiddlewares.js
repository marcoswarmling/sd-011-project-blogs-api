const { validateJWT } = require('./userMiddlewares');

const verifyNameFieldExists = (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).json({
        message: '"name" is required',
        });
    }
    next();
};

const validateUserJwt = (req, res, next) => {
validateJWT(req, res, next);
};

module.exports = {
    verifyNameFieldExists,
    validateUserJwt,
};
