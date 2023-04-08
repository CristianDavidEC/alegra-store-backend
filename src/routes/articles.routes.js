 import { Router } from "express";
import {
  getArticles,
  
} from "../controllers/articles.controller.js";

const router = Router();







// GET all articles
router.get("/articles", getArticles);



/*

deleteArticle,
  createArticle,
  updateArticle,

// DELETE An Article
router.delete("/articles/:id", deleteArticle);

// INSERT An Article
router.post("/articles", createArticle);

// UPDATE An Article
router.patch("/articles/:id", updateArticle);
*/

export default router;
