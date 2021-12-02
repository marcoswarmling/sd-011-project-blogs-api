const userPasswordRequired = (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).json({
            message: '"password" is required',
        });
    }
    if (password.length <= 0) {
        return res.status(400).json({
            message: '"password" is not  allowed to be empty',
        });
    }
    next();
};

const userEmailRequired = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({
            message: '"email" is required',
        });
    }
    if (email.length <= 0) {
        return res.status(400).json({
            message: '"email" is not allowed to be empty',
        });
    }
    next();
};

module.exports = {
    userPasswordRequired,
    userEmailRequired,
};