const express=require('express');
const { createBook, createAuthor, getBookwithAuthor } = require('../controllers/book-controller');
const router=express.Router();


router.post('/addBook', createBook)
router.post('/addAuthor', createAuthor)
router.get('/:id' , getBookwithAuthor)
module.exports=router;