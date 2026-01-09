console.log("this is class file ");

// 1.simple class
class simp {
    name: string;
    age : number;
    issimple : boolean;

    constructor(name : string,age : number,issimple : boolean){
        this.name = name;
        this.age = age;
        this.issimple = issimple
    }
    studentDetails() :void {
        console.log(`name is ${this.name} age is ${this.age} student is valued ${this.issimple}`);
    }
} 
let result = new simp("abc",20,true);
result.studentDetails();