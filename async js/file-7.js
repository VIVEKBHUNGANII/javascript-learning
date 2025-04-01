// callback hell using promises

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");

function changetext(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject("element not found");
            }
        },time)
    })
}

changetext(heading1 , "one" , "red" , 1000)
.then(()=>{
    return changetext(heading2 , "two" , "blue" , 1000)
})
.then(()=>changetext(heading3 , "three" , "green" , 1000))
.then(()=>changetext(heading4 , "four" , "brown" , 1000))
.then(()=>changetext(heading5 , "five" , "purple" , 1000))
.then(()=>changetext(heading6 , "six" , "yellow" , 1000))
.then(()=>changetext(heading7 , "seven" , "cyan" , 1000))
.then(()=>changetext(heading8 , "eight" , "orange" , 1000))
.then(()=>changetext(heading9 , "nine" , "purple" , 1000))
.then(()=>changetext(heading10 , "ten" , "red" , 1000))
.catch(error=>alert(error))

// arrow function chee atale return and {} kathi sakay