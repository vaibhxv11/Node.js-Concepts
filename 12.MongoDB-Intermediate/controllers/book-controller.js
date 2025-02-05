const Author=require("../models/Author")
const Book=require("../models/Book")

const createAuthor=async (req , res)=>{
    try{

        const author=new Author(req.body);
        await author.save();

        res.status(201).json({
            success :true,
            data:author,
        })

    } catch(e)
    {
        res.status(500).json({
            success:false,
            message :'Some Error Occured '
        })
    }
}

const createBook=async (req , res)=>{
    try{

         const book=new Book(req.body);
         await book.save();
         
         
        res.status(201).json({
            success :true,
            data:book,
            message :"added Book Successfully"
        })


    } catch(e)
    {
        res.status(500).json({
            success:false,
            message :'Some Error Occured '
        })
    }
}

const getBookwithAuthor=async (req , res)=>{
    try{

        const book=await Book.findById(req.params.id).populate("author");

         if(!book){
             return res.status(404).json({
                success:false,
                message :'Book not found'
             })
         }
        res.status(200).json({
            data:book,
            message :'Fetched Successfully'
        })

    } catch(e)
    {
        res.status(500).json({
            message :"Internal Sever Error",
            success:false
        })
    }
}

module.exports={createAuthor,createBook ,getBookwithAuthor}