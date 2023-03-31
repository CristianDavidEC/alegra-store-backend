 import { Router } from "express";
import {
  getArticles,
} from "../controllers/articles.controller.js";

const router = Router();


// GET all articles
router.get("/articles", getArticles);


export default router;
