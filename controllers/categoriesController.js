const express = require('express');
const { Categories } = require('../models');
const { validationToken } = require('../middlewares/validateEntries');

const router = express.Router();

router.post('/', validationToken, async (req, res) => {
    const { name } = req.body;
    const data = await Categories.create({ name });
    if (!name) return res.status(400).json({ message: '"name" is required' });
    return res.status(201).json(data);
});

module.exports = router;