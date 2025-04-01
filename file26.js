// 3 ) filter method
// const numbers = [1,2,3,4,5,6,7,8];

// const isodd = function(number){
//     return number%2!==0 ;
// }

// const oddnumbers = numbers.filter(isodd);
// console.log(oddnumbers);


// const evennumbers = numbers.filter((number)=>{
//     return number % 2 === 0 ;
// });

// console.log(evennumbers);


// 4 ) reduce method

const numbers = [1,2,3,4,5];

// aim : sum of all numbbers

const sum = numbers.reduce((accumulator , currentvalue)=>{
    return accumulator + currentvalue ;
})


// how to work 

// accumulator     currentvalue      return
//  1                  2               3
//  3                  3               6
//  6                  4               10 
//  10                 5               15

console.log(sum);

// real life ex
const usercart = [
    {productid : 1 , productname : "mobile",price : 15000},
    {productid : 2 , productname : "laptop",price : 52000},
    {productid : 3 , productname : "tv",price : 2000}
];

const totalprice =usercart.reduce((totalprice , currentproduct)=>{
     return totalprice + currentproduct.price ;
},0)
console.log(totalprice);

// total        current        return
// 0            15000           15000
//15000         52000           67000
//67000          2000           69000
