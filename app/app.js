const bodyParser = require('body-parser');
const app = require('../index');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;
