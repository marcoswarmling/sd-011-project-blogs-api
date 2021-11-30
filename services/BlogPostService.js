const { BlogPost, User, Categorie } = require('../models');
const TokenJWT = require('../validations/TokenJwt');

class BlogPostService {
  constructor() {
    this.blogPost = BlogPost;
    this.token = new TokenJWT();
    this.user = User;
    this.categories = Categorie;
    this.zero = 0;
    this.ExpiredToken = 'Expired or invalid token';
    this.TokenNotFound = 'Token not found';
  }

  async createPost(token, data) {
    try {
      if (token === undefined || token.length === this.zero) {
        return { code: 401, message: this.TokenNotFound };
      }
      const { title, content } = data;
      const { id } = this.token.validate(token);
      const newPost = await this.blogPost.create({ title, content, userId: id });
      return { code: 201, data: newPost };
    } catch (error) {
      return { code: 401, message: this.ExpiredToken };
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
        return { code: 401, message: this.TokenNotFound };
      }

      this.token.validate(token);
      const posts = await this.getNPosts();
      return { code: 200, data: posts };
    } catch (error) {
      return { code: 401, message: this.ExpiredToken };
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
        return { code: 401, message: this.TokenNotFound };
      }

      this.token.validate(token);
      const post = await this.getIdPost(id);
      if (!post) {
        return { code: 404, message: 'Post does not exist' };
      }
      return { code: 200, data: post };
    } catch (error) {
      return { code: 401, message: this.ExpiredToken };
    }
  }

  async updatePost(token, id, data) {
    try {
      if (token.length === this.zero) {
        return { code: 401, message: this.TokenNotFound };
      }

      const validadeToken = this.token.validate(token);
      const testpost = await this.getIdPost(id);
      if (validadeToken.id !== testpost.userId) return { code: 401, message: 'Unauthorized user' };
      const { title, content } = data;
      await this.blogPost.update({ title, content }, { where: { id } });
      const post = await this.getIdPost(id);
      if (!post) {
        return { code: 404, message: 'Post does not exist' };
      }
      return { code: 200, data: post };
    } catch (error) {
      return { code: 401, message: this.ExpiredToken };
    }
  }

  async deletePost(token, id) {
    try {
      if (token.length === this.zero) {
        return { code: 401, message: this.TokenNotFound };
      }

      const validadeToken = this.token.validate(token);
      const testpost = await this.getIdPost(id);
      if (!testpost) {
        return { code: 404, message: 'Post does not exist' };
      }
      if (validadeToken.id !== testpost.userId) return { code: 401, message: 'Unauthorized user' };
      await this.blogPost.destroy({ where: { id } });
      return { code: 204, message: 'Post deleted' };
    } catch (error) {
      return { code: 401, message: this.ExpiredToken };
    }
  }
}

module.exports = BlogPostService;