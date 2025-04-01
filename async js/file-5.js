// function return promice

function ricepromices(){
    const bucket = ["coffee","chips","vegetable","salt","rice"];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("fried rice")
        }else{
            reject("could not done")
        }
    })
}


ricepromices().then(
    (myfriedrice)=>{
        console.log("lets eat",myfriedrice)
    }
).catch(
    (error)=>{
        console.log(error)
    }
)