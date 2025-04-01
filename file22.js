

// block scope  vs  function scope

// let and const are block scope
// var is function scope

{
    const firstname = "vivek";
    console.log(firstname);
}

{
    const firstname="mohit";
    console.log(firstname);
}

// var
{
    var name= "vivek";
    console.log(name);
}

{
    console.log(name);
}


// block ni bahar let and const variable access na thai
// block ni bahar khali var j acess thai