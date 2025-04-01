// clone using object.assign

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

// const obj2 = {...obj1};
const obj2 = Object.assign({},obj1); 
obj1.key3="value3";
console.log(obj1);
console.log(obj2);


// Optional chaining

const user = {
    name : "vivek",
    address : {house : "1234"}
}

console.log(user.name);
console.log(user?.address?.house);