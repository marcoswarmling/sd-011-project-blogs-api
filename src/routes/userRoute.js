const rescue = require('express-rescue');
const controller = require('');

const route2User = (app) => {
    app.route('/user')
        .post(rescue(controller.userController));
};

module.exports = route2User;