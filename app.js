const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_request, response) => response.send());

// app.use(nextErrors);

module.exports = app;
