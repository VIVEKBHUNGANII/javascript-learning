// keypress event 
// mouse hover event

const body = document.body; 

body.addEventListener("keypress" , (e)=>{
    console.log(e.key)
})

const butten = document.querySelector(".btn-headline")
// console.log(butten)

butten.addEventListener("mouseover" , ()=>{
    console.log("mousse over event occured...")
})
butten.addEventListener("mouseleave" , ()=>{
    console.log("mouseleave event occured...")
})