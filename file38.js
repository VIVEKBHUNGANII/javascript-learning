function hello(){
    return " bale bale "
}

// javascript function --> function + object
// you can add own properties

hello.ownproperties = "very unique"
console.log(hello.ownproperties);


// function provide more useful prpoerties
// prototype khali space aape 
// prototype khali function pase j hoy

if(hello.prototype){
    console.log("present");
}else{
    console.log("not present");
}


// add properties in prototype obj

hello.prototype.abc = "abc";
hello.prototype.sing = function(){
    return "bjbjhjkcskvnb";
}
console.log(hello.prototype)