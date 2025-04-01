// call back function

function myfunc2(name){
    console.log("inside func 2")
    console.log(`my name is ${name}`)
}

function myfunc1 (callback){
    console.log("inside func one")
    callback("vivek");
}

myfunc1(myfunc2);



// function returning function

function myfunc(){
    function hello(){
        return "hello word";
    }
    return hello;
}

const ans = myfunc();
console.log(ans());      // function biju function return kare
