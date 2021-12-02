const express = require('express');
const { validateJWT } = require('../schemas/userSchema');
const { User } = require('../services');
const { getById } = require('../services/User');

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

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const { message, statusCode, user } = await getById(id);
    if (message) return res.status(statusCode).json({ message });
    return res.status(statusCode).json(user);
});

module.exports = router;
