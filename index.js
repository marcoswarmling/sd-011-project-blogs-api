const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./src/api/routes/routesUser');
const { validateSchema } = require('./src/middlewares/validateSchema');
const { usersSchema } = require('./src/schemas/userSchema');

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/user', validateSchema(usersSchema), userRoutes);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!!!!!!`));
