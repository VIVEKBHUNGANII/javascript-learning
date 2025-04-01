// promise.resolve 

// const mypromise = Promise.resolve("vivek");
// Promise.resolve("vivek").then(value=>{
//     console.log(value);
// })


// promise chaining 

function mypromise(){
    return new Promise((resolve , reject)=>{
        resolve("vivek");
    })
}

mypromise()         // aa function hamesha promise return kare atale tena par then lagadi sakay
.then(value=>{
    console.log(value);       
    value += " bhungani"
    return value ;
})
.then(value=>{
    console.log(value)
    value += " is attractive"
    return value;
})
.then(value=>{
    console.log(value)
})