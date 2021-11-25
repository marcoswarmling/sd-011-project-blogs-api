const express = require('express');
const { createUser, loginUser } = require('../services/userService');
const { validateUser, validateLogin } = require('../middlewares/validateUser');

const router = express.Router();

router.post('/user', validateUser, async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const response = await createUser(displayName, email, password, image);

    res.status(201).json(response);
});

router.post('/login', validateLogin, async (req, res) => {
    const { email, password } = req.body;

    const response = await loginUser(email, password);

    res.status(200).json(response);
});

module.exports = router;
