// callback , callback hell , pyramid of doom

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

// callback hell

// setTimeout(()=>{
//     heading1.textContent="one";
//     heading1.style.color = "red"
//     setTimeout(()=>{
//         heading2.textContent="two";
//         heading2.style.color = "purple"
//         setTimeout(()=>{
//             heading3.textContent="three";
//             heading3.style.color = "red"
//             setTimeout(()=>{
//                 heading4.textContent="four";
//                 heading4.style.color = "pink"
//                 setTimeout(()=>{
//                     heading5.textContent="five";
//                     heading5.style.color = "green"
//                     setTimeout(()=>{
//                         heading6.textContent="six";
//                         heading6.style.color = "blue"
//                         setTimeout(()=>{
//                             heading7.textContent="seven";
//                             heading7.style.color = "brown"
//                             setTimeout(()=>{
//                                 heading8.textContent="eight"
//                                 heading8.style.color="brown"
//                             },3000)
//                         },1000)
//                     },3000)
//                 },2000)
//             },1000)
//         },2000)
//     },2000)
// },1000)


// pyramid of doom

function changeTextColor(element,text,color,time,onsucess,onfailar){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onsucess){
                onsucess();
            }
        }else{
            if(onfailar){
                onfailar();
            }
        }
    },time)
}


changeTextColor(heading1,"one","violet",1000,()=>{
    changeTextColor(heading2,"two","purple",2000,()=>{
        changeTextColor(heading3,"three","red",1000,()=>{
            changeTextColor(heading4,"four","pink",1000,()=>{
                changeTextColor(heading5,"five","green",2000,()=>{
                    changeTextColor(heading6,"six","blue",2000,()=>{
                        changeTextColor(heading7,"seven","pink",1000,()=>{
                            changeTextColor(heading8,"eight","cyan",1000,()=>{
                                changeTextColor(heading9,"nine","brown",2000,()=>{
                                    changeTextColor(heading10,"ten","orange",1000,()=>{

                                    },()=>{ console.log("element10 not exist")})
                                },()=>{ console.log("element9 not exist")})
                            },()=>{ console.log("element8 not exist")})
                        },()=>{ console.log("element7 not exist")})
                    },()=>{ console.log("element6 not exist")})
                },()=>{ console.log("element5 not exist")})
            },()=>{ console.log("element4 not exist")})
        },()=>{ console.log("element3 not exist")})
    },()=>{ console.log("element2 not exist")})
},()=>{ console.log("element1 not exist")})