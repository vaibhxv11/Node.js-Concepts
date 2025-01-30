const Book = require("../models/Book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});

    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        data: allBooks,
        message: "ALl Books Fetched Successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Books Not Found",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(404).json({
      success: false,
      message: "Books Not Found",
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const bookDetailsById = await Book.findById(bookId);

    if (bookDetailsById) {
      res.status(200).json({
        success: true,
        data: bookDetailsById,
        message: " Book Fetched Successfully By ID",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Books Not Found",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(404).json({
      success: false,
      message: "Books Not Found",
    });
  }
};

const addNewBook = async (req, res) => {
  try {
    const data = req.body;
    const newBook = await Book.create(data);

    if (data) {
      res.status(201).json({
        success: true,
        message: "Book Added Successfully",
        data: newBook,
      });
    }
    console.log("Book Added Successfully");
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Problem while adding book",
    });
  }
};

const updateBook = async (req, res) => {
    try{

        const bookId=req.params.id;
        const updatedbookData=req.body;
        const updatedBook=await Book.findByIdAndUpdate(bookId , updatedbookData , {
            new :true
        });

        if(updateBook)
        {
            res.status(200).json({
                success:true,
                data :updatedBook ,

                message:"Book Updated Successfully"
            })
        } else{
            res.status(404).json({
                success:false,
                message:"Book does not found"
            })
        }

    } catch(e)
    {
        res.status(500).json({
            success:false,
            message :"Error while updating book"
        })
        
    }
};

const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookId);

    if (!deletedBook) {
      res.status(404).json({
        success: false,
        message: "Book is not found with id",
      });
    } else {
      res.status(200).json({
        success: true,
        data: deletedBook,
        message: "Book deleted Successfully",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong !please try again",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook,
};
