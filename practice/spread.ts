console.log("Hello Spread Operator");

//  ...spread operator

const arr = [1,2,4,3,5,6];
const arr1 = [2,4,6,7,8,9];

const mergeArray = [...arr,...arr1];
console.log("Merge Array :",mergeArray);

let person =['shiv','krishna','raghav'];
let person1 = ['ram','laxman','bharat'];
let mergePerson = [...person,...person1];
console.log("Merge Person :",mergePerson);


// rest operator 
let addi = (...num:any)=>{
    // console.log("Num value :",num);
    const result = num.reduce((a:number,b:number)=>{
        return a+b;
        //  console.log("A value :",a);
        //  console.log("B value :",b);
    },0);
    console.log("Addition is :",result);
}
addi(2,4,5,6,7);

// console.log(num);

let  multi = (...mu:any)=>{
    const res = mu.reduce((x:number,z:number)=>{
      return x*z;
    },1);
     console.log("Multiplication is :",res);
}
multi(2,4,3,6);


