function delayFn(time){
    return new Promise((resolve)=> setTimeout(resolve , time));


}


async function delayGreet(name) {
    await delayFn(2000);
    console.log(name);
    
}

delayGreet("Vaibhav");


async function diviosn(n1 , n2) {

    try{
        if(n2===0){
            throw new Error('Can not divide bu zero')
           
        }
        return n1/n2;

    } catch(error){
    
        console.error("error" , error);
        return null;

    }
    
}

async function mainfun(){
    console.log(await diviosn(10 , 2));
    console.log(await diviosn(10 , 0));

}

mainfun();