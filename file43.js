// super keyword

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

// console.log(animal1.eat());
// console.log(animal2);

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed=speed;
    }

    run(){return `${this.name} is running at ${this.speed} kmph`}
}

const puppy = new Dog("puppy",2,45);
console.log(puppy);
console.log(puppy.run());
console.log(puppy.eat());

// super keyword sub class ma property add karvi hoy and juni property parents class mathi levi hoy tyare use thai
