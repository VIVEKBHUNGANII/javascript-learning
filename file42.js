// class keyword
// class keyword prototype ni jem j kam kare 

class Createuser{
    constructor(firstname,lastname,email,age,address){
    this.firstname=firstname;
    this.lastname=lastname;
    this.email=email;
    this.age=age;
    this.address=address;
    }

    about(){return `${this.firstname} is ${this.age} years old`}
    is18(){return this.age >= 18;}
    sing(){return ' llaa lla la  aa'}
    func(a){console.log(a)}
}

const user1 =new Createuser("vivek","patel","vivekpatel9640@gmail.com",15,"ahmedabad");

const user2 = new Createuser("harsh","patel","vivekpatel9640@gmail.com",25,"ahmedabad");

const user3 =new  Createuser("mohit","patel","vivekpatel9640@gmail.com",52,"ahmedabad");

console.log(user1.is18());
console.log(Object.getPrototypeOf(user1));
console.log(user1.func("mahesh"));





// ex of class

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){return `${this.name} is not eat`}
}

const animal1 =  new Animal("lion",25);
const animal2 =  new Animal("chitta",2);
const animal3 =  new Animal("fox",12);

console.log(animal1.eat());
console.log(animal2)

// new keyword lakhine j class lakhavano toj constructor call thai


// extends keyword
class Dog extends Animal{
      // 2 var code lakhavani jarur na pade aane sub class of animal kevai
}

const puppy = new Dog("puppy",2);
console.log(puppy)