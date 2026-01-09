console.log("This is a TypeScript interface practice ");
var person = {
    name: "Alice",
    age: 10,
    isStudent: true,
};
console.log(person);
var output = {
    name: "abc",
    // age,
    email: "12345@sdfg"
};
console.log(output);
var readonl = {
    id: 1,
    name: 'ram',
    password: 'ram12345',
};
console.log(readonl);
var exten = {
    name: 'shyam',
    age: 10,
    subject: 'math',
    grade: 'a+',
};
console.log(exten);
//  5.function type interface
// interface fun {
//     (a : number, b : number) : number;
// }
var add = function (x, y) {
    return x + y;
};
console.log(add(10, 10));
