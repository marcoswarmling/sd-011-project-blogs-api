class Err {
  constructor(message, status = 400) {
    this.errors = [{ 
      message: JSON.stringify({ 
        message,
        status, 
      }), 
    }];
  }
}

module.exports = Err;