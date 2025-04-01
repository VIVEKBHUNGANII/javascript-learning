// methods
// function inside object

const person = {
    name: "vivek",
    age: 19 ,
    about : function(){
        console.log(`person name is ${this.name} and age is ${this.age}`)
    }
}  // this keyword define person boject

person.about();

//ex
function info(){
    console.log(`name is ${this.name} and age is ${this.age}`)
}

const user1 = {
    name: "vivek",
    age: 19 ,
    about : info
}
const user2 = {
    name: "ram",
    age: 11 ,
    about : info
}
const user3 = {
    name: "raghu",
    age: 12,
    about : info
}

user1.about();
user2.about();
user3.about();