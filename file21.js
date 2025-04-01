// function inside function


function app(){
    const myfunc= () => {
        console.log("hello in myfunc");
    }
    myfunc()
    const mul = (num1 , num2 ) => num1*num2;
    console.log(mul(2,3,));

    console.log("inside app");

    const sum = (num1,num2) =>{
        return num1+num2;
    }
    console.log(sum(555,21));
}
app();



