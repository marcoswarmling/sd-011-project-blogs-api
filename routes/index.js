const userRouter = require('./user');
const loginRouter = require('./login');
const categoryRouter = require('./categoryRouter');
const blogPostRouter = require('./blogPostRouter');

module.exports = {
  categoryRouter,
  userRouter,
  loginRouter,
  blogPostRouter,
};