// setTimeout

console.log("script start");

// aa function last ma run thai
const id =setTimeout(()=>{
    console.log("inside time out")
}, 1000 )// minimum time wite kare )

for(let i=0 ; i< 100 ; i++){
    console.log("for loop")   
}

// clearTimeout(id);   
console.log("script end")