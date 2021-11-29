const { BlogPost } = require('../models');
const TokenJWT = require('../validations/TokenJwt');

class BlogPostService {
  constructor() {
    this.blogPost = BlogPost;
    this.token = new TokenJWT();
    this.zero = 0;
  }

  async createPost(token, data) {
    try {
      if (token === undefined || token.length === this.zero) {
        return { code: 401, message: 'Token not found' };
      }
      const { title, content } = data;
      const { id } = this.token.validate(token);
      const newPost = await this.blogPost.create({ title, content, userId: id });
      return { code: 201, data: newPost };
    } catch (error) {
      return { code: 401, message: 'Expired or invalid token' };
    }
  }
}

module.exports = BlogPostService;