const router = require('express').Router();

router.get('/user', (req, res) => {
  res.status(200).json({
    message: 'Usuários',
  });
});

module.exports = router;
