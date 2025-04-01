// setInterval

// console.log("start")

// setInterval(()=>{
//     console.log(Math.random())
// },1000)

// console.log("end");

const body1 = document.body;
const button = document.querySelector("button");

const interval = setInterval(()=>{
    const red = Math.floor(Math.random() * 125)
    const green = Math.floor(Math.random() * 125)
    const blue = Math.floor(Math.random() * 125)
    const rgb =`rgb(${red},${green},${blue})`;
    body1.style.background =rgb;
    // console.log(rgb);
}, 1000)

button.addEventListener("click" , ()=>{
    clearInterval(interval);
    button.textContent = body1.style.background
    console.log(button.textContent)
});

