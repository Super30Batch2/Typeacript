/* const name1:string ="Sample1";
console.log(name); */

// spread
/* var test1 = [1,2,3,9,8,8,9];
var test2 = [4,5,6, 11,22,33];

var mixedArray = [...test1,...test2];
console.log(mixedArray); */

let message1: string = "Hello World";
console.log(message1);

let test:string="false";
console.log(test);
let number1:boolean=false;
console.log(number1);


var test1 = "CTS Pune";
console.log(test1);
var cts:object={name:"solapur"}
console.log(cts);

//Data types

//1. strings

let test8:string="pune1";

console.log(test8);
var test4:string="testcode1";
console.log(test4);

//2.Number

var test3:number=123;
console.log(test3);

var test5:number=121;
console.log(test5);

//3.Boolean

var value1:boolean=true;
console.log(value1);

let value2:boolean=false;
console.log(false);

//4.Null and undefined

var value7:null=null;
console.log(value7);

var value8:undefined=undefined;
console.log(value8);

//5.Array

let arr1:number[] = [1,5,7,8];
let arr4:string[] = ['test','test2'];

let result=[...arr1,...arr4];
console.log(result);

let array1:string[] = ['Apple','orange','mango'];
let array2:any[] = ['fruits',123,'test88'];//[ 'Apple', 'orange', 'mango', [ 'fruits', 123, 'test88' ] ]
//let array2:number[] = [454,123,88];
console.log(array1);
let result2=[...array1,...array2];
console.log(result2);



//7.Tuple
//Normal arrays allow any type (or same type repeatedly), but tuples give strict structure
let tup:[string, number, boolean] = ['name',7440, true];
console.log(tup);

tup.push("yogesh");
console.log(tup);
tup.pop();
console.log(tup);

//9.
// rest.

let addition = (...num:any) =>{
    const result = num.reduce((a:number,b:number)=>{
        return a+b;
    },0);
    console.log(result);
}
addition(2,45,78,7,897,8);


//////////////

var test9 :any ={name:'Alex'};
let test6 = "suraj";
console.log(test6);
console.log(typeof(test6));
console.log(test9);
console.log(typeof(test9));





