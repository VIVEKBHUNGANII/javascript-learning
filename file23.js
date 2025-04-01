// default parameter

function addtwo(a,b){
    if(typeof b === "undefined"){
        b = 0 ;
    }
    return a+b ;
}
const ans = addtwo(4);
console.log(ans);



function addtwo (a,b=0){
    return a+b;
}
console.log(addtwo(5,10));



// rest parameter

function myfunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myfunc(1,2,3,4,5,6,7,8,9);

function addall(...numbers){
    let total =0 ;
    for(let number of numbers){
        total=total+number;
    }
    return total;
}
const ans2 =addall(1,2,3,4,5,6,7);
console.log(ans2);


// parameter destructuring

const person={
    name : "vivek",
    gender: "male",
    age:6,
}

// function persondetail(obj){
//     console.log(obj.name);
//     console.log(obj.gender);
//     console.log(obj.age);
// }
// persondetail(person);

function persondetail({name , gender , age}){
    console.log(name);
    console.log(gender);
    console.log(age);
}
persondetail(person);