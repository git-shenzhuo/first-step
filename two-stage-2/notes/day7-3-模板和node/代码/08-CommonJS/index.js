/*导入模块*/
// let moduleA = require("./moduleA.js");
// let moduleB = require("./moduleB.js");

// console.log(moduleA);
// console.log(moduleB);
//
// var name = moduleA.name;
// var age  = moduleA.age;
// var height = moduleA.height;
// console.log(name, age, height);

let {name,age,height} = require("./moduleA.js");
let {showInfo}        = require("./moduleB.js");
console.log(name, age, height);
showInfo();