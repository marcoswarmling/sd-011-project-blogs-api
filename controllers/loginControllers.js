const authenticationLogin = async (req, res) => {
  try {
    const token = req.headers;
    return res.status(201).json({ token });
  } catch (e) {
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};

module.exports = authenticationLogin;
