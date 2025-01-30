function delayFn(time){
    return new Promise((resolve)=>setTimeout(resolve , time))

}

console.log('Promise Stated ')
delayFn(2000).then(()=>{
    console.log('After 2 seconds promise resolved ')
}) 



function divide (n1 , n2){
    return new Promise((resolve , reject )=>{
        if(n2===0){
         reject("Can not perform divison by 0")
        }  else {
            resolve(n1/n2);
        }
    })
}

divide (10 ,0).then(result=>console.log(result))
              .catch(error=> console.log(error , 'error'))