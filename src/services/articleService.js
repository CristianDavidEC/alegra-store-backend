const pool = require('../config/db');
const Article = require('../models/article');

const getArticles = async ({ id, typeItem, createDate, startDate, endDate }) => {
  let sqlQuery = 'SELECT * FROM Articles';
  const queryParams = [];

  // Agregar cláusula WHERE si se especifica algún parámetro de filtro
  if (id) {
    sqlQuery += ' WHERE id = ?';
    queryParams.push(id);
  }

  if (typeItem) {
    sqlQuery += (queryParams.length ? ' AND' : ' WHERE') + ' TypeItem = ?';
    queryParams.push(typeItem);
  }

  if (startDate && endDate) {
    sqlQuery += (queryParams.length ? ' AND' : ' WHERE') + ' CreateDate BETWEEN ? AND ?';
    queryParams.push(startDate, endDate);
  } else if (startDate) {
    sqlQuery += (queryParams.length ? ' AND' : ' WHERE') + ' CreateDate >= ?';
    queryParams.push(startDate);
  } else if (endDate) {
    sqlQuery += (queryParams.length ? ' AND' : ' WHERE') + ' CreateDate <= ?';
    queryParams.push(endDate);
  }

  return new Promise((resolve, reject) => {
    pool.query(sqlQuery, queryParams, (error, results, fields) => {
      if (error) reject(error);

      if (!results || !Array.isArray(results)) {
        resolve([]);
        return;
      }

      const formattedResults = results.map((article) => {
        return new Article(article);
      });

      resolve(formattedResults);
    });
  });
};


module.exports = {
  getArticles,
};
