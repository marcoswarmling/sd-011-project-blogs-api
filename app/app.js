// const routes = require('../routes');
const app = require('../index');

app.get('/users', (req, res) => {
  res.json('oi');
});

// app.use(routes);
