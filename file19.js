// functions
// function decleration
function singsong(){
    console.log("happy birthday to you....")
}
singsong();


function sumtwonumber(num1 , num2 ){
    return num1 + num2 ;
}
const returnnumner = sumtwonumber(55,40);
console.log(returnnumner);


// ifeven number
// input = 1 number 
// output = true or false

function ifeven(number){
    // if(number%2===0){
    //     return true ;
    // }
    // return false ;
    return number % 2 === 0;
}
console.log(ifeven(55));

//input = string
// output = first character

function firstchar(string){
    return string[0];
}
console.log(firstchar("vivek"));


// input = array , target (number)
// output = index of target prasent in array

function findtarget(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

const myarray = [1,5,9,14,25,32]
const ans = findtarget(myarray,25);
console.log(ans);





// function expression

const singmusic = function(){
    console.log("meri teri");
}
singmusic();