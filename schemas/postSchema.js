const { codes, messages } = require('./userSchema');

const postValid = (title, content, categoryIds) => {
    switch (true) {
        case !title: return { statusCode: codes.nf, message: messages.tr };
        case !content: return { statusCode: codes.nf, message: messages.cr };
        case !categoryIds: return { statusCode: codes.nf, message: messages.cir };
        default: return {};
    }
};

module.exports = {
    postValid,
};
