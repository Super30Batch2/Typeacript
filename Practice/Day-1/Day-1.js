/* const name1:string ="Sample1";
console.log(name); */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// spread
/* var test1 = [1,2,3,9,8,8,9];
var test2 = [4,5,6, 11,22,33];

var mixedArray = [...test1,...test2];
console.log(mixedArray); */
var message1 = "Hello World";
console.log(message1);
var test = "false";
console.log(test);
var number1 = false;
console.log(number1);
var test1 = "CTS Pune";
console.log(test1);
var cts = { name: "solapur" };
console.log(cts);
//Data types
//1. strings
var test8 = "pune1";
console.log(test8);
var test4 = "testcode1";
console.log(test4);
//2.Number
var test3 = 123;
console.log(test3);
var test5 = 121;
console.log(test5);
//3.Boolean
var value1 = true;
console.log(value1);
var value2 = false;
console.log(false);
//4.Null and undefined
var value7 = null;
console.log(value7);
var value8 = undefined;
console.log(value8);
//5.Array
var arr1 = [1, 5, 7, 8];
var arr4 = ['test', 'test2'];
var result = __spreadArray(__spreadArray([], arr1, true), arr4, true);
console.log(result);
var array1 = ['Apple', 'orange', 'mango'];
var array2 = ['fruits', 123, 'test88']; //[ 'Apple', 'orange', 'mango', [ 'fruits', 123, 'test88' ] ]
//let array2:number[] = [454,123,88];
console.log(array1);
var result2 = __spreadArray(__spreadArray([], array1, true), array2, true);
console.log(result2);
//7.Tuple
//Normal arrays allow any type (or same type repeatedly), but tuples give strict structure
var tup = ['name', 7440, true];
console.log(tup);
tup.push("yogesh");
console.log(tup);
tup.pop();
console.log(tup);
//9.
// rest.
var addition = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var result = num.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(result);
};
addition(2, 45, 78, 7, 897, 8);
//////////////
var test9 = { name: 'Alex' };
var test6 = "suraj";
console.log(test6);
console.log(typeof (test6));
console.log(test9);
console.log(typeof (test9));
