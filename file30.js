// sets (it is iterable  string and array is iterable)
// in set no duplicate allow only unique item
// no index base access
// order not garrented

const names = ["vivek" , "mahesh" , "janak", "ramesh"];
const number = new Set();
number.add(1);
number.add(2);
number.add(3);
number.add(4);
number.add(5);
number.add(6);
number.add(names)
console.log(number);

if(number.has(2)){    // has() check karva set ma chhe ke nai
    console.log("2 is present")
}else{
    console.log("2 is not present")
}


const array = [1,2,3,4,1,2,3,5,6,7,9,1,2,5,2,4,3,4,5,1,2];
const uniqueElement=new Set(array);
console.log(uniqueElement); 

// length find karva mate
let length = 0 ;
for(let element of uniqueElement){
    length++;
}

console.log(length);