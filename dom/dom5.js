
// loop

let navItem = document.getElementsByTagName("a"); 
console.log(navItem);


// simple for loop
// for(let i = 0 ; i<navItem.length ; i++){
//     console.log(navItem[i]);
//     const navItems = navItem[i];
//     navItems.style.backgroundColor = "#fff"
//     navItems.style.color = "red";
//     navItems.style.fontWeight = "bold";
// }

// for of loop

// for(let navItems of navItem){
//     navItems.style.backgroundColor = "#fff"
//     navItems.style.color = "red";
//     navItems.style.fontWeight = "bold";
//     console.log(navItems)
// }


// forEach method
navItem=Array.from(navItem);  // pala array like object ne array ma change karo pachi j array ni method use kari sakay
navItem.forEach((navItems)=>{
    navItems.style.backgroundColor = "#fff"
    navItems.style.color = "red";
    navItems.style.fontWeight = "bold";
})


// queryselectorall ma badhi loop lage
// foreach pan use thai .. use karva mate array ma convert karvu na pade