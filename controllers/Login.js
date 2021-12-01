const express = require('express');
const { Login } = require('../services');

const router = express.Router();

router.post('/', async (req, res) => {
   const { email, password } = req.body; 
   const { token, message, statusCode } = await Login.loginUser(email, password);
   if (message) return res.status(statusCode).json({ message });
   return res.status(statusCode).json({ token });
});

module.exports = router;
