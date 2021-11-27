const jwt = require('jsonwebtoken');

class TokenJwt {
  constructor() {
    this.secret = 'trybeScret';
  }

  // gera o token
  generate(data) {
    return jwt.sign(data, this.secret, { expiresIn: '1h', algorithm: 'HS256' });
  }

  // valida o token
  validate(token) {
    return jwt.verify(token, this.secret);
  }
}

module.exports = TokenJwt;