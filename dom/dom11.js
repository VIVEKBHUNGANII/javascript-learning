// how to get dimention of element

const todosection = document.querySelector(".todo-section");
const info = todosection.getBoundingClientRect();
const info1 = todosection.getBoundingClientRect().height;
console.log(info);
console.log(info1);