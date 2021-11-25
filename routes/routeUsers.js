const express = require('express');

const route = express.Route();

route.get('teste', (req, res) => {
  res.send('ok');
});

module.exports = route;
