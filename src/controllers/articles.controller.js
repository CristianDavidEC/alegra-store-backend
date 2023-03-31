import { pool } from "../db.js";

export const getArticles = async (req, res) => {
  pool.query('SELECT * FROM Articles', function (error, results, fields) {
    
    if (error) throw error;
    console.log('Los resultados son: ', results);
    res.json(results);
  });
  
};



