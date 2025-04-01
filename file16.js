// how to itarate object
const person = {
  name: "vivek",
  age: 19,
  "person hobbies": ["playing", "eating", "gaming"],
};

for (let key in person) {
  //   console.log(person[key]);
  console.log(`${key} : ${person[key]}`);
}
console.log(Object.keys(person));

// computed property

const key1 = "objk1";
const key2 = "objk2";

const value1 = "val1";
const value2 = "val2";

// create this
// const obj = {
//     objk1 : val1,
//     objk2 : val2
// }

const obj = {
  [key1]: value1,
  [key2]: value2,
};
console.log(obj);
