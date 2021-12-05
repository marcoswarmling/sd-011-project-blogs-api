const rescue = require('express-rescue');
const controller = require('../controller/userController');

const route2User = (app) => {
    app.route('/user')
        .post(rescue(controller.newUser));
};

module.exports = route2User;