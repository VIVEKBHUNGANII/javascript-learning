// object

//--> how to create object

// const person = {name:"vivek",age:19};
// console.log(person);
// console.log(person.name);

//--> array in object

const person = {
    name:"vivek",
    age:19,
    hobbies:["playing","eating","gaming"],
    "school name":"pps"
};

console.log(person.hobbies);
console.log(person);

//--> how to add key value pair in object

person.gender = "male";
console.log(person);

// second way to use key
console.log(person["name"]);


// difference between dot and bracket notation

console.log(person["school name"]);

// how to add new variable value in object

const key = "email";
person[key]="vivekpatel9640@gmail.com"
console.log(person);




