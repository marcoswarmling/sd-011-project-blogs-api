const express = require('express');
const { User } = require('../services');

const router = express.Router();

router.post('/', async (req, res) => {
    const user = req.body;
    const { token, message, statusCode } = await User.create(user);
    if (message) return res.status(statusCode).json({ message });
    return res.status(statusCode).json(token);
});

module.exports = router;
