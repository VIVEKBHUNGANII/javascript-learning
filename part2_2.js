// closure

function printfullname(firstname,lastname){
    function printname(){
        console.log(firstname,lastname)
    }
    return printname;
    // printname valu function return thai tyare tene parents function mathi first name and last name teni sathe laine return thai aene closure kevai
}

const ans = printfullname("vivek", "bhungani");
ans();



// ex 2 for closure

function myfunc(){
    let counter = 0 ;
    return function(){
        if(counter < 1 ){
            console.log("hii, you call me");
            counter++;
        }else{
            console.log("me ak bar call ho gaya hu")
        }
    }
}

const func = myfunc();
func();
func();


// ex 
function isfunction(power){
    return function(number){
        return number**power
    }// jyare aa func return thai tyare sathe power lai ne return thai
}
const square = isfunction(2);
const ans2 = square(5);
console.log(ans2);