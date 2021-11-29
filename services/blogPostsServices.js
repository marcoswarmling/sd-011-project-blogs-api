const { BlogPosts } = require('../models');

const createPost = async ({ title, content, data }) => {
//  console.log('Entrou no CREATE', title, content, data);
  const createdPost = await BlogPosts.create({  
    userId: data.id,
    title,
    content,    
  });
 // console.log(createdPost, 'CREATED-POST');
  return createdPost;
};

module.exports = {
  createPost,
};
