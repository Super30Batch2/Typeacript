console.log("This is a TypeScript interface practice ");

// 1.simple interface
interface simp {
    name: string;
    age : number;
    isStudent : boolean;
}
let person: simp ={
    name : "Alice",
    age : 10,
    isStudent : true,
};
console.log(person);

// 2.optional property

interface opt {
    name : string ;
    age? : number;
    email : string;
}
let output : opt = {
    name : "abc",
    // age,
    email : "12345@sdfg"
}
console.log(output);

// 3.readonly property
interface read {
    readonly id : number;
    name : string;
    password : string;
 }
 let readonl: read = {
    id : 1,
    name : 'ram',
    password : 'ram12345',
 }
 console.log(readonl);

//  4.Extending interface

interface teacher {
    subject : string;
    // experience : number;
    grade : string;
}

interface student extends teacher{
    name : string;
    age : number;
}
let exten : student = {
    name : 'shyam',
    age : 10,
    subject : 'math',
    grade : 'a+',
}
console.log(exten);

//  5.function type interface

interface fun {
    (a : number, b : number) : number;
}

let add : fun = function(x : number , y : number){
    return x + y ;
};
console.log(add(10,10))