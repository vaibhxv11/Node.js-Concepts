const express=require('express')
const app=express();

//middleware

app.use(express.json());

let books=[
    {
        id:'1',
        title :"Book 1"
    } ,
    {
        id:'2',
        title :"Book 2"
    } ,
    {
        id:'3',
        title :"Book 3"
    } 

];

app.get('/' , (req , res)=>{
    res.json({
        message:"Welcome to our bookstore api"
    })
})

app.get('/get' , (req , res)=>{
    res.json(books);
})

app.get('/get/:id', (req , res)=>{
    const book=books.find(item => item.id===req.params.id);

    if(book){
        res.status(200).json(book)
    } else{
        res.status(404).json({
            message :"Book is not found"
        })
    }
})

//add a new book
app.post("/add", (req , res)=>{

    const newBook={
        id: (books.length +1).toString() ,
        title : `Books ${books.length +1}`
    }
 
     books.push(newBook)
     res.status(200).json({
        data :newBook ,
        message :"Book added Successfully"
     })


})

//update the book

app.put("/update/:id" , (req , res)=>{
    const currentBook=books.find(item=> item.id===req.params.id);

    if(currentBook){
        currentBook.title=req.body.title || currentBook.title;

        res.status(200).json({
            data :currentBook ,
            message :`Book updated with ${currentBook.id} with title - ${req.body.title}`
        }) 
    }
    else {

        res.status(404).json({
            message:"Book not found"
        })

    }
})

//delete a book
app.delete("/delete/:id" , (req , res)=>{
    const currentBook=books.find(item=> item.id===req.params.id);
    
    if(currentBook)
    {
        books.pop(currentBook);
        res.status(200).json({
            data :currentBook ,
            message:"Book deleted successfully"
        })

    }
    else 
    {
        res.status(404).json({
            message :"Book does not found"
        })
    }



})

const port =3000;
app.listen(port , ()=>{
    console.log('Server is running')
})