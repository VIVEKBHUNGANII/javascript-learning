// 8 ) some method

const array = [1,2,3,5,7,9];

// jo ak pan element odd hase to true return karse

const ans = array.some((number)=>number%2 === 0 );
console.log(ans);

// ex 
const products = [
    {name:"phone" , price : 12510},
    {name:"phone2" , price : 1520},
    {name:"phone3" , price : 58100},
    {name:"phone4" , price : 500},
    {name:"phone5" , price : 4611},
    {name:"phone6" , price : 6210}
];

const ans2 = products.some((product)=>product.price > 100000);
console.log(ans2);


// 9 )  fill method
// value , start , end

const myarray = [1,2,3,4,5,6,7,8,9];

myarray.fill(99,2,5);
console.log(myarray);


// 10 ) splice method
// start , delet , insert

const array5 = ["item1","item2","item3"]

// delet
array5.splice(1,1)
console.log(array5);

// insert 
array5.splice(1,0,"inserted");
console.log(array5);

// delet and insert
const deleted = array5.splice(2,1,"insert2","insert3");
console.log(array5);
console.log(deleted);