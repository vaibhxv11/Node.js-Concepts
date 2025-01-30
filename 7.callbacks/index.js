function person(name , callback){
    console.log(`I am ${name}`);
    callback()

}

function adddress()
{
    console.log("I am from Sangli");
}

person("Vaibav" , adddress);

fs.readFile('input.txt' , 'utf8' , (err , data)=>{
    if(err){
        console.log("Error in reading file " , err);
        return ;
    }

    console.log(data)
})