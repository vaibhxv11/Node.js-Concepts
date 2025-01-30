//module.exports -> export
// require -> import

 const firstModule=require('./first-module');

 console.log(firstModule.add(20 , 60));


 try{
    console.log('trying to divide by zero')
    let result=firstModule.divide(0 ,0);
    console.log(result);
 }
 catch(error){
    console.log('Caught an error' , error.message );
 }

 // module wrapper
 (
    function(exports , require , module , _filename , _dirname){
        //your module code goes here
    }
 ) 