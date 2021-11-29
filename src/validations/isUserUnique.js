module.exports = async (model, email) => {
  const foundUser = await model.findOne({ where: { email } });
  if (!foundUser) return true;

  throw new class notUniqueError {
    constructor() {
      this.errors = [{ 
        message: JSON.stringify({ 
          message: 'User already registered', 
          status: 403, 
        }), 
      }];
    }
  }();
};