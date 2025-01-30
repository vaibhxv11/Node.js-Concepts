console.log("Module wrapper demo");

console.log('_filname' , __filename);
console.log('_dirname' , __dirname);

module.exports.greet=function (name){
    console.log(`Hello ${name}`);
}
 