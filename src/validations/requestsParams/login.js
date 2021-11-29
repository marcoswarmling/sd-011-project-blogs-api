exports.rules = {
  email: {
    presence: {
      message: '^"email" is required',
    },
    exclusion: {
      within: ['', ' '],
      message: '^"email" is not allowed to be empty',
    },
  },
  password: {
    presence: {
      message: '^"password" is required',
    },
    exclusion: {
      within: ['', ' '],
      message: '^"password" is not allowed to be empty',
    },
  },
};
