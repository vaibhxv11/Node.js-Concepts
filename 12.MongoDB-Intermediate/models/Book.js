const { default: mongoose } = require('mongoose');
const monoose=require('mongoose');

const BookSchema=new mongoose.Schema({
     title :String ,
     author :{
        type :mongoose.Schema.Types.ObjectId,
        ref:'Author'
     }
})

module.exports=mongoose.model('Book' , BookSchema)