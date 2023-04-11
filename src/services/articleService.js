const pool = require('../config/db');
const Article = require('../models/article');
const { Utils } = require('../utils/utils');


const getArticles = async ({ id, typeItem, createDate, startDate, endDate }) => {
  const queryParams = [id, typeItem, createDate, startDate, endDate];
  const procedureName = 'get_articles';

  return new Promise((resolve, reject) => {
    pool.query(`CALL ${procedureName}(?, ?, ?, ?, ?)`, queryParams, (error, results, fields) => {
      if (error) reject(error);

      if (!results || !Array.isArray(results[0])) {
        resolve([]);
        return;
      }

      const formattedResults = results[0].map((article) => {
        return new Article(article);
      });

      resolve(formattedResults);
    });
  });
};



module.exports = {
  getArticles,
};