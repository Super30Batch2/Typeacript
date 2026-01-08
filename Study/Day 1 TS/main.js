var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("This is typescript session");
var name1 = 'codefirst';
console.log(name1);
// let addition = ()=>{
//     console.log("addition");
// }
// addition();
// spread
var test1 = [1, 2, 3, 9, 8, 8, 9];
var test2 = [4, 5, 6, 11, 22, 33];
var mixedArray = __spreadArray(__spreadArray([], test1, true), test2, true);
console.log(mixedArray);
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

