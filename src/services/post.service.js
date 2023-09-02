const { BlogPost, User, Category } = require('../models');

const insertPost = async (postInfo) => {
  console.log(postInfo);
};

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: 'SUCCESSFUL', data: posts };
};

module.exports = {
  insertPost,
  findAll,
};