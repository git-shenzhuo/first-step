export var age    = 18;
export var name   = "李艳虹";
export var height = 175;


// export class Person {
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age  = age;
//     }
//     show(){
//         console.log(this.name + this.age);
//     }
// }

/*导出(1) 每次导出一个数据*/
// export var name   = "李艳虹";
// export var age    = 18;

/*导出(2) 一次性导出多个数据*/
// export {age,name,height,Person}

/*导出(3) 默认导出  每个文件只能有一个*/
// export default name;