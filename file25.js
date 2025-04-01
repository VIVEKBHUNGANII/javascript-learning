// important array method


// 1 ) forEach method

// const numbers = [4,5,2,3,8];

// function func(number , index){
//     console.log(`index is ${index} and number is ${number} and mul is ${number * 2}`)
// }

// numbers.forEach(func);  // foreach loop jevu kam kare 



const users = [
    {firstname:"vivek", age:19},
    {firstname:"raghu", age:15},
    {firstname:"ram", age:52},
    {firstname:"jenish", age:25},
]

users.forEach(function(user){
    console.log(user.firstname)
});


for(let user of users){
    console.log(user.firstname)   
};    // bane na ans same j aave



// 2 ) map method 
// map array return kare atale print karva pela map ne store karvo pade

const numbers = [4,5,6,7];

// const square = function(number){
//     return number * number ;
// }

// const squarenumber = numbers.map(square);
// console.log(squarenumber);  //  first reet 

const square = numbers.map(function(number){
    return number * number ;
})

console.log(square);
