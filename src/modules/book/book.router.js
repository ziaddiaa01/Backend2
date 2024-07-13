import { Router } from 'express';
import {
    addBook,
    updateBook,
    deleteBook,
    searchBooks,
    getBookById,
    getAllBooks
} from './book.controller.js';

const router = Router();

<<<<<<< HEAD:src/modules/book/book.router.js
router.post('/add', addBook);
router.put('/book/:bookId', updateBook);
router.delete('/delete/:bookId', deleteBook);
router.get('/book/search', searchBooks);
router.get('/getById/:bookId', getBookById);
router.get('/getall', getAllBooks);
=======
router.post('/book', addBook);
router.put('/book/:bookId', updateBook);
router.delete('/book/:bookId', deleteBook);
router.get('/book/search', searchBooks);
router.get('/book/:bookId', getBookById);
router.get('/books', getAllBooks);
>>>>>>> cb57dd93db784ee05bab7bdcb983cbf62735e45f:BackEnd/src/modules/book/book.router.js

export default router;
