const { BlogPost, User, Categorie } = require('../models');
const TokenJWT = require('../validations/TokenJwt');

class BlogPostService {
  constructor() {
    this.blogPost = BlogPost;
    this.token = new TokenJWT();
    this.user = User;
    this.categories = Categorie;
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

  async getNPosts() {
    const posts = await this.blogPost.findAll(
      {
        include: [
          { model: this.user, 
            as: 'user',
attributes: { exclude: ['password', 'createdAt', 'updatedAt'] } },
          { model: this.categories, 
            as: 'categories',
attributes: { exclude: ['createdAt', 'updatedAt'] },
through: { attributes: [] } },
        ],
      },
    );
    return posts;
  }

  async getAllPosts(token) {
    try {
      if (token === undefined || token.length === this.zero) {
        return { code: 401, message: 'Token not found' };
      }

      this.token.validate(token);
      const posts = await this.getNPosts();
      return { code: 200, data: posts };
    } catch (error) {
      return { code: 401, message: 'Expired or invalid token' };
    }
  }

  async getIdPost(id) {
    const post = await this.blogPost.findOne({
      where: { id },
      include: [
        { model: this.user,
as: 'user', 
        attributes: { exclude: ['password', 'createdAt', 'updatedAt'] } },
        { model: this.categories,
as: 'categories', 
        attributes: { exclude: ['createdAt', 'updatedAt'] },
through: { attributes: [] } },
      ],
    });

    return post;
  }

  async getPostById(token, id) {
    try {
      if (token === undefined || token.length === this.zero) {
        return { code: 401, message: 'Token not found' };
      }

      this.token.validate(token);
      const post = await this.getIdPost(id);
      if (!post) {
        return { code: 404, message: 'Post does not exist' };
      }
      return { code: 200, data: post };
    } catch (error) {
      return { code: 401, message: 'Expired or invalid token' };
    }
  }
}

module.exports = BlogPostService;