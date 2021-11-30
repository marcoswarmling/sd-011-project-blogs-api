const express = require('express');
const services = require('../services');

const router = express.Router();

router.post('/', async (req, res) => {
    const user = req.Body;
    const newUser = await services.User.create(user);
});