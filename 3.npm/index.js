const lodash=require('lodash');

const names=['vaibhav' , 'john' ,'terry' , 'alex' , 'mia' ];

const capitalize=lodash.map(names , lodash.capitalize);

console.log(capitalize);