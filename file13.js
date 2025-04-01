// primitive vs reference data types

// primitive

let num1= 6 ;
let num2= num1 ;

console.log(num1);
console.log(num2);

num1++;

console.log("after increment num1");
console.log(num1);
console.log(num2);


// reference

let array1 =["itrm1","item2"];
let array2 =array1;

console.log(array1);
console.log(array2);
array1.push("item3");

console.log("after adding in array 1");
console.log(array1);
console.log(array2);



// how to clone array 
// how to concatenate two arrays

let array3 = ["item1", "item2"]
let array4 = array3.slice(0); // method 1
// let array4 =[].concat(array3);  // method 2
// let array4 = [...array3];  // method 3 spread operator

array3.push("item3");
console.log(array3===array4);
console.log(array3);
console.log(array4);

array4 = array3.slice(0).concat(["item4"]); // array 3 pan copy karo and ak navi item pan umeri
console.log(array4);