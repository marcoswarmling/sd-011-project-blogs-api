const { BlogPost } = require('../models');

const createIt = async (postData) => {
    try {
      const result = await BlogPost.create(postData);
  
      return result;
    } catch (error) {
      return error;
    }
};

module.exports = { createIt };