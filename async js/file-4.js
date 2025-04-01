// promise

const bucket = ["coffee","chips","vegetable","salt","rice"];


//produce
const friedrice = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("fried rice")
    }else{
        reject("could not done")
    }
})

// consume

friedrice.then(
    (myfriedrice)=>{
        console.log("lets eat",myfriedrice)
    }
).catch(
    (error)=>{
        console.log(error)
    }
)