// get and set attribute

const link = document.querySelector("a");
console.log(link.getAttribute("href"));


const input = document.querySelector(".form-todo input");
console.log(input.getAttribute("placeholder"));

link.setAttribute("href" ,"google.com")
console.log(link.getAttribute("href")); 



// get multiple element using get element by class name
// get multiple element using queryselectorall

const navItem = document.getElementsByClassName("nav-item"); // give html collection
console.log(navItem);


// const navItem = document.querySelectorAll(".nav-item");  // give nodelist
// console.log(navItem);