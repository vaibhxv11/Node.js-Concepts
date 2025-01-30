const fs=require('fs');
const path=require('path');


const dataFolder=path.join(__dirname , 'data')


if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder created");
}

const filePath=path.join(dataFolder , 'example.txt');

fs.writeFileSync(filePath , "Hello from Vaibhav");
console.log("FIle created successfully");

const readContentFromFile=fs.readFileSync(filePath , "utf8");
console.log('File conetent' , readContentFromFile)

fs.appendFileSync(filePath , "\nThis is new line added to that file");
console.log("new content added in that file");


//Async Way of Creating the file :

const asyncFilePath=path.join(dataFolder , 'async-example.txt');

fs.writeFile(asyncFilePath , "Hello , Async node js" , (err)=>{
    if(err) throw err;
    console.log('Async File is created successfully');

    fs.readFile(asyncFilePath ,'utf8' ,(err, data)=>{
        if(err) throw err;

        console.log("Async FIle Content:",data);

        fs.appendFile(asyncFilePath , "\nTHis is another line added " ,(err)=>{
            if(err) throw  err;
            console.log("new line added to async file ")


            fs.readFile(asyncFilePath , 'utf8' , (err , updatedData)=>{
                if(err) throw err;
                console.log("Updared file data :" , updatedData)
            })
        } )
    } )
})