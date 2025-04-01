
// nested if else

let winningnumber = 20 ;
let usergauss = +prompt("gauss a number");

if(usergauss === winningnumber){
    console.log("your gauss is right")
}else{
    if(usergauss > 20 ){
        console.log("your gauss is high to winning number")
    }else{
        console.log("your gauss number is low to winning number")
    }
}



// else if condition

let mark = 90 ;

if(mark < 10 ){
    console.log("grad d") 
}else if(mark < 35){
    console.log("grad c")
}else if(mark < 60){
    console.log("grad b")
}else if(mark < 90){
    console.log("grad a")
}else {
    console.log("grad a+")
}


// switch case

let day = 8;
switch(day){
    case 0:
        console.log("sunday");
        break;
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break; 
    default:
        console.log("invalid day")                     

}