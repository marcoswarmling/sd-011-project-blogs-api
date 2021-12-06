const service = require('../services/userService');

const newUser = async (req, res) => {
    const { name, email, password, image } = req.body;
    const token = await service.newUser(name, email, password, image);
    return res.status(201).json({ token });
};

module.exports = {
    newUser,
};
