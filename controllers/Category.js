const express = require('express');
const { Category } = require('../services');
const { validateJWT } = require('../schemas/userSchema');

const router = express.Router();

router.use(validateJWT);

router.post('/', async (req, res) => {
    const { message, statusCode, category } = await Category.create(req.body);
    if (message) return res.status(statusCode).json({ message });
    return res.status(statusCode).json(category);
}); 

router.get('/', async (_req, res) => {
    const result = await Category.getAll();
    return res.status(200).json(result);
});

module.exports = router;