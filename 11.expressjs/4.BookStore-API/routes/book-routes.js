const express = require("express");
//create router instance
const router = express.Router();
//import all controllers
const {
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
  addNewBook,
} = require("../controllers/book-controller");

//routes of Book
router.get("/get" , getAllBooks);
router.get("/get/:id" , getSingleBook);
router.post("/add" , addNewBook);
router.put("/update/:id" , updateBook);
router.delete("/delete/:id" , deleteBook);

module.exports=router;

