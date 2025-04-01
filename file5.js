// trim()  space ne delet kare
// toUppurCase()
// toLowerCase()
// slice()



let lastname = "    bhuNgani    ";
console.log(lastname)
console.log(lastname.length);

lastname= lastname.trimEnd();
console.log(lastname);
console.log(lastname.length);


console.log(lastname.toUpperCase());

console.log(lastname.toLowerCase());


// start index
// end index

let newstring = lastname.slice(0,8);
console.log(newstring);


// typeof operator

let age = 22;
let firstname = " vivek";

console.log(typeof (age));
console.log(typeof (firstname));

// convert number to string

age = age + "";
console.log(typeof (age));


// convert string to number 

let mystr = "34";
console.log(typeof (mystr));

mystr = +"34";
console.log(typeof(mystr));