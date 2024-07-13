import { Router } from 'express';
import {
    addArticle,
    updateArticle,
    deleteArticle,
    searchArticles,
    getArticleById,
    getAllArticles
} from './article.controller.js';

const router = Router();

<<<<<<< HEAD:src/modules/article/article.router.js
router.post('/add', addArticle);
router.put('/article/:articleId', updateArticle);
router.delete('/delete/:articleId', deleteArticle);
router.get('/article/search', searchArticles);
router.get('/getById/:articleId', getArticleById);
router.get('/getAllArticles', getAllArticles);
=======
router.post('/article', addArticle);
router.put('/article/:articleId', updateArticle);
router.delete('/article/:articleId', deleteArticle);
router.get('/article/search', searchArticles);
router.get('/article/:articleId', getArticleById);
router.get('/articles', getAllArticles);
>>>>>>> cb57dd93db784ee05bab7bdcb983cbf62735e45f:BackEnd/src/modules/article/article.router.js

export default router;
