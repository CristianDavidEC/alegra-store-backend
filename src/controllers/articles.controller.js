import { pool } from "../db.js";




export const getArticles = async (req, res) => {
  const { id, typeItem, startDate, endDate } = req.query;

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

  pool.query(sqlQuery, queryParams, function (error, results, fields) {
    if (error) throw error;

    // Convertir la fecha en cada objeto al formato deseado
    const formattedResults = results.map((article) => {
      const createDate = new Date(article.CreateDate); // crear un objeto Date a partir de la cadena de fecha
      article.CreateDate = createDate.toISOString().substring(0, 10); // convertir la fecha a formato ISO 8601 y obtener los primeros 10 caracteres
      return article;
    });

    res.json(formattedResults);
  });
};






/*

export const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM Articles WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createArticle = async (req, res) => {
  try {
    const { name, price } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO Articles (name, price) VALUES (?, ?)",
      [name, price]
    );
    res.status(201).json({ id: rows.insertId, name, price });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;

    const [result] = await pool.query(
      "UPDATE Articles SET name = IFNULL(?, name), price = IFNULL(?, price) WHERE id = ?",
      [name, price, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Article not found" });

    const [rows] = await pool.query("SELECT * FROM Articles WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};*/