const service = require('../services/userService');

const newUser = async (req, res) => {
    const { name, email, password } = req.body;
    const result = await service.newUser(name, email, password);
    return res.status(201).json({ result });
};

module.exports = {
    newUser,
};
