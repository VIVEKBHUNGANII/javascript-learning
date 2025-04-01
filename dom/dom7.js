// classlist

// section na badha class jova mate

const todosection = document.querySelector(".todo-section");
console.log(todosection.classList);

// section ma class add karva  je pelethi css ma hovo pasde

// todosection.classList.add("bg-dark");

// class remove karva 

// todosection.classList.remove("bg-dark");

// check karva class hajar che ke nai 

const ans = todosection.classList.contains("container");
console.log(ans);

// toggle jo class hoy to aene delet kare ane jo na hoy to add kare

// todosection.classList.toggle("bg-dark");