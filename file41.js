// new keyword

function Createuser(firstname, lastname, email, age, address) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.email = email;
  this.age = age;
  this.address = address;
}
// future ma kbr pade ke aa proto set karva new keyword lakhavo pade atale function no pelo akshae capital lakho
Createuser.prototype.about = function () {
  return `${this.firstname} is ${this.age} years old`;
};
Createuser.prototype.is18 = function () {
  return this.age >= 18;
};
Createuser.prototype.sing = function () {
  return " llaa lla la  aa";
};

const user1 = new Createuser(
  "vivek",
  "patel",
  "vivekpatel9640@gmail.com",
  15,
  "ahmedabad"
);

const user2 = new Createuser(
  "harsh",
  "patel",
  "vivekpatel9640@gmail.com",
  25,
  "ahmedabad"
);

const user3 = new Createuser(
  "mohit",
  "patel",
  "vivekpatel9640@gmail.com",
  52,
  "ahmedabad"
);

console.log(user1);
console.log(user2.is18());

// user ni key jova mate proto vali pan show kare
// for (let key in user1) {
//   console.log(key);
// }

// khud ni property jova atale ke prototype ma hoy e na batave
for (let key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}
