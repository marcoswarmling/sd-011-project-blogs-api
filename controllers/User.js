const express = require('express');
const { validateJWT } = require('../schemas/userSchema');
const { User } = require('../services');

const router = express.Router();

router.post('/', async (req, res) => {
    const user = req.body;
    const { token, message, statusCode } = await User.create(user);
    if (message) return res.status(statusCode).json({ message });
    return res.status(statusCode).json({ token });
});

router.use(validateJWT);

router.get('/', async (_req, res) => {
    const result = await User.getAll();
    return res.status(200).json(result);
});

module.exports = router;
