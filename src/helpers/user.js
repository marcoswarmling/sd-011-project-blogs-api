const STATUS_CODE_OK = 200;
const STATUS_CODE_CREATED = 201;
const STATUS_CODE_BAD_REQUEST = 400;
// const STATUS_CODE_UNPROCESSABLE_ENTITY = 422;
// const STATUS_CODE_NOT_FOUND = 404;

// const CODE_ERROR_422 = 'invalid_data';
// const CODE_NOT_FOUND = 'not_found';

const MSG_ERROR_DISPLAYNAME_LENGHT = '"displayName" length must be at least 8 characters long';

const errDisplayName = {
  err: {
    code: STATUS_CODE_BAD_REQUEST,
    message: MSG_ERROR_DISPLAYNAME_LENGHT,
  },
};

const errEmailRequired = {
  err: {
    code: STATUS_CODE_BAD_REQUEST,
    message: '"email" is required',
  },
};

const errPasswordLenght = {
  err: {
    code: STATUS_CODE_BAD_REQUEST,
    message: '"password" length must be 6 characters long',
  },
};

const errPasswordRequired = {
  err: {
    code: STATUS_CODE_BAD_REQUEST,
    message: '"password" is required',
  },
};

module.exports = {
  STATUS_CODE_OK,
  STATUS_CODE_CREATED,
  errDisplayName,
  errEmailRequired,
  errPasswordLenght,
  errPasswordRequired,
};