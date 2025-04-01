// for loop in array

let fruit1 = ["apple","banana","santra","narangi"]
let fruit2=[];

for(i=0 ; i < fruit1.length ; i++){
    fruit2.push(fruit1[i].toUpperCase());
    
}
console.log(fruit2);


// use const for creating array

const fruit3 = ["apple","banana","santra","narangi"];
fruit3.push("itam");
console.log(fruit3);
    



// for of loop in array 

const fruit4=["apple","banana","santra","narangi"];
for(let fruit of fruit4){
    console.log(fruit)
}

// for in loop   in loop index print kare

for(let index in fruit4){
    // console.log(index);
    console.log(fruit4[index]);
}



// array destructuring

const array = ["value1","valur2","value3","value4"]

let [myvar1 , myvar2 , ...mynewarray]=array;
console.log("value of myvar1 is",myvar1);
console.log("value of myvar1 is",myvar2);
console.log("value of new array is",mynewarray);

// array ni value destructure kare