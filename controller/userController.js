const userService = require('../service/userService');

const controllerUserInsert = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const insertUser = await userService.userModelRegister(
        displayName,
        email,
        password,
        image,
);
        if (insertUser.error === 'Email_Exists') {
            return res.status(409).json({
                message: 'User already registered',
            });
        }
        return res.status(201).json(insertUser);
};

const controllerFindUser = async (req, res) => {
    const token = req.headers.authorization;
    console.log('TOKEN ', token);
    const { email, password } = req.body;
    const findEmailUser = await userService.userModelFind(token, email, password);
    if (findEmailUser.error === 'USER_NOT_FOUND') {
        return res.status(400).json({
            message: 'Invalid fields',
        });
    }
    return res.status(200).json(findEmailUser);
};

const controllerFindAll = async (req, res) => {
    const userAll = await userService.userModelFindAll();
    return res.status(200).json(userAll);
};

module.exports = {
    controllerUserInsert,
    controllerFindUser,
    controllerFindAll,
};