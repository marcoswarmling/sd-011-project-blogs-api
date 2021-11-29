const userService = require('../service/userService');

const controllerUserInsert = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const insertUser = await userService.userModelRegister(
        displayName,
        email,
        password,
        image,
);
        return res.status(200).json(insertUser);
};

module.exports = {
    controllerUserInsert,
};