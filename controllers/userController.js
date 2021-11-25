const express = require('express');
const { createUser } = require('../services/userService');
const { validateUser } = require('../middlewares/validateUser');

const router = express.Router();

router.post('/user', validateUser, async (req, res) => {
    const { displayName, email, password, image } = req.body;
    
    const response = await createUser(displayName, email, password, image);

    console.log(response);

    res.status(201).json(response);
});

module.exports = router;
