/*导入指定模块*/
// import {name, age} from "./moduleA.js";
// import {Person} from "./moduleA.js";
// import {showInfo}  from  "./moduleB.js";
//
// // console.log(name, age);
// showInfo();
// (new Person("zs",19)).show();

/*如果导入的模块它是默认导出的，那么可以重新起名*/
// import newName from "./moduleA.js";
// console.log(newName);

/*moduleA模块中导出的所有数据都会被保存到指定的对象中*/
import * as moduleA from "./moduleA.js";

console.log(moduleA.name,moduleA.age);