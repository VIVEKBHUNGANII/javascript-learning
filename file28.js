// 6 ) find method

const myarray = ["lion","dog","cat","rabbit"];

const ans = myarray.find((string)=> string.length === 3);
console.log(ans);


// ex
const users = [
    {userid:1 , uasername:"vivek"},
    {userid:2 , uasername:"kino"},
    {userid:3 , uasername:"raghu"},
    {userid:4 , uasername:"nandan"},
    {userid:5 , uasername:"patel"},
]

const ans2 = users.find((user)=>{
    return user.userid === 2}
);
console.log(ans2);


// 7 ) every method

const numbers = [2,4,6,8,10,12,14,16];

// callback function ---> return kare    true / false  (boolean)

// every method -->  true / false    jo fun ni badhi value true hoy to j every true return kare

const ans3 = numbers.every((number)=>number%2 === 0 );
console.log(ans3);


// ex
const products = [
    {name:"phone" , price : 12510},
    {name:"phone2" , price : 1520},
    {name:"phone3" , price : 58100},
    {name:"phone4" , price : 500},
    {name:"phone5" , price : 4611},
    {name:"phone6" , price : 6210}
];

// check every product price < 30000    30000 thi ochi

const ans4 = products.every((product)=>product.price <= 30000);
console.log(ans4);