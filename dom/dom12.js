// event

// use karvani reet 
// 1) html file ma j onclick property use karine
// 2) js file ma select kari ne ex  btn.onclick = function() ......

// 3) method ------> addEventListener
const btn = document.querySelector(".btn-headline")
// console.log(btn);

// function clickme(){
//     console.log("you clicked me")
// }
// btn.addEventListener("click" , clickme);

// btn.addEventListener("click" ,  function clickme(){
//     console.log("you clicked me")
// });

// btn.addEventListener("click" , ()=>console.log("you click me"))


// web ma badha button select karva 
// loop lagavi ne kari sakay
// forEach method pan use kari sakay

const allbtn = document.querySelectorAll("button");
// console.log(allbtn);

for(let button of allbtn){
    button.addEventListener("click" , function(){
        console.log(this.textContent)
    })
}