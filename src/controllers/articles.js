const { getArticles } = require('../services/articleService');

const getArticlesController = async (req, res, next) => {
  try {
    const articles = await getArticles(req.query);
    res.json(articles);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getArticlesController,
};

