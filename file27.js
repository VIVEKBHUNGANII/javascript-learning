// 5 ) sort method

const names = ["vivek" , "mahesh" , "janak", "ramesh"];
names.sort();
console.log(names);

// sort method sort kare ascending or descending order ma
// sort method as a string sorting kare  ASCII value par thi
// sort method main arry ne change kare


const numbers = [12,5,1200,300,400,17,35];
numbers.sort((a,b)=>{
    return a - b ;  // if a - b == positive then write b first   ex 12 - 5 = 7  to 7 pela aave pachi 12
});
console.log(numbers);



// ex 
const products = [
    {name:"phone" , price : 1251},
    {name:"phone2" , price : 1520},
    {name:"phone3" , price : 5810},
    {name:"phone4" , price : 500},
    {name:"phone5" , price : 4611},
    {name:"phone6" , price : 6210}
];

const lowtohigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price ;
})

const hightolow = products.slice(0).sort((a,b)=>{
    return b.price - a.price ;
})

console.log(products);  // array ne clone karo arale main arry change na thai
console.log(lowtohigh);
console.log(hightolow);
