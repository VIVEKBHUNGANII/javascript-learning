// how code execute

console.log(this);
console.log(window);
console.log(myfunction); // g.m ma aakhu fun hoy atale e aave
console.log(fullname); // undefine aave bcz global memory ma haju value set na thai hoy

function myfunction() {
  console.log("this is function");
}

var firstname = "vivek";
var lastname = "bhungani";
var fullname = firstname + " " + lastname;
console.log(fullname);

// ex for function expression

console.log(myfunc); // func expression var thi banavu chhe atale pela teni value g.m ma undefined set hoy

var myfunc = function () {
  console.log("second function");
};

console.log(myfunc);

// ex of variable using let

// console.log(name);
let name = "vivek";
console.log(name);

// let or const thi banava hoy e g.m ma uninitialise hoy atale tene pela use karva mate tnitialise karva pade
