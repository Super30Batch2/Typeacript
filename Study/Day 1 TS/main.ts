console.log("This is typescript session");

const name1:string = 'codefirst';
console.log(name1);

// let addition = ()=>{
//     console.log("addition");
// }
// addition();


// spread
var test1 = [1,2,3,9,8,8,9];
var test2 = [4,5,6,11,22,33];

var mixedArray = [...test1,...test2];
console.log(mixedArray);

// rest.

let addition = (...num:any) =>{
    const result = num.reduce((a:number,b:number)=>{
        return a+b;
    },0);
    console.log(result);
}
addition(2,45,78,7,897,8);


