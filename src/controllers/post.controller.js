const mapStatusHTTP = require('../utils/mapStatusHTTP');
const { categoryService, postService } = require('../services');

const insertPost = async (req, res) => {
  try {
    const { id } = req.user; // ESTÁ CHEGANDO COMO UNDEFINED
    const { title, content, categoryIds } = req.body;
    const postInfo = [title, content, id, categoryIds];

    // const catPromises = categoryIds.map(async (catId) => {
    //     const { status } = await categoryService.findOne(catId);
    //     return status;
    //   });
  
    const catStatus = await Promise.all(categoryIds.map(async (catId) => {
      const { status } = await categoryService.findOne(catId);
      return status;
    }));
  
    if (catStatus.some((status) => status === 'NOT_FOUND')) {
      return res.status(mapStatusHTTP('CONFLICT'))
      .json({ message: 'one or more "categoryIds" not found' });
    }
  
    const newPost = await postService.insertPost(postInfo);
    const { status, data } = newPost;
    return res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    console.error('--------- ERRO:', e);
  }
};

const findAll = async (_req, res) => {
  try {
    const { status, data } = await postService.findAll();
    console.log('FINDALL STATUS:', status);
    console.log('FINDALL DATA:', data);

    return res.status(mapStatusHTTP(status)).json(data);
  } catch (e) {
    console.error(e);
    res.status(mapStatusHTTP('NOT_FOUND')).json({ message: 'Failed to retrive posts' });
  }
};

module.exports = {
  insertPost,
  findAll,
};