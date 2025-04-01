// maps object 
// key value pair store kare
// map ma key game te chale like string number array etc....

const person = new Map();
person.set("name","vivek");
person.set('age',19);
person.set(1,"one");

console.log(person)
console.log(person.get("age"));
console.log(person.keys());

for(let key of person.keys()){
    console.log(key , typeof key)
}

for(let [key , value] of person){
    console.log(key , value)
}

const names = new Map([["name","vivek"],["age",19]]);
console.log(names);

// ex

const person2 = {
    id:1,
    name:"vivek"
}
const extrainfo = new Map();
extrainfo.set(person2 , {age:19 , gender:"male"});
console.log(extrainfo);
console.log(extrainfo.get(person2));