const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const user = require('./routes/userRouter');
const login = require('./routes/loginRouter');
const category = require('./routes/categoryRouter');
const blogPost = require('./routes/blogPostRouter');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));

app.get('/', (request, response) => {
  response.send();
});

app.use('/user', user);
app.use('/login', login);
app.use('/categories', category);
app.use('/post', blogPost);