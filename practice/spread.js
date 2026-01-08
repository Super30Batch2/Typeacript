var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
console.log("Hello Spread Operator");
//  ...spread operator
var arr = [1, 2, 4, 3, 5, 6];
var arr1 = [2, 4, 6, 7, 8, 9];
var mergeArray = __spreadArray(__spreadArray([], arr, true), arr1, true);
console.log("Merge Array :", mergeArray);
var person = ['shiv', 'krishna', 'raghav'];
var person1 = ['ram', 'laxman', 'bharat'];
var mergePerson = __spreadArray(__spreadArray([], person, true), person1, true);
console.log("Merge Person :", mergePerson);
// rest operator 
var addi = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    // console.log("Num value :",num);
    var result = num.reduce(function (a, b) {
        return a + b;
        //  console.log("A value :",a);
        //  console.log("B value :",b);
    }, 0);
    console.log("Addition is :", result);
};
addi(2, 4, 5, 6, 7);
// console.log(num);
var multi = function () {
    var mu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mu[_i] = arguments[_i];
    }
    var res = mu.reduce(function (x, z) {
        return x * z;
    }, 1);
    console.log("Multiplication is :", res);
};
multi(2, 4, 3, 6);
