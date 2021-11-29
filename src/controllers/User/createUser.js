const { User } = require('../../models');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    await User.create({ displayName, email, password, image });

    return res.status(201).json({ token: 'criado' });
  } catch (error) {
    const { errors: [data] } = error;
    const DEFAULT_STATUS = 400;
    const DEFAULT_MESSAGE = 'invalid entries';
    
    const { status = DEFAULT_STATUS, message = DEFAULT_MESSAGE } = JSON.parse(data.message);

    return res.status(status).json({ message });
  }
};

module.exports = createUser;