const app = require('./app.js');

require('dotenv').config();

app.listen(3000, () => console.log('ouvindo porta 3000!'));
