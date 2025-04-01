// getter and setter

class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
    }

    get fullname(){
        return `${this.firstname} ${this.lastname}`
    }
    set fullname(fullname){
        const[firstname , lastname]=fullname.split(" ")
        this.firstname=firstname;
        this.lastname=lastname;
    }
}


const person1 = new Person("vivek", "patel",20)
console.log(person1.fullname);

person1.fullname="mohit sharma";
console.log(person1)

// get ni madad thi function ne property jem tret thai
// set name ne set kare