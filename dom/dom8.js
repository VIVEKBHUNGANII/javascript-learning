// nava element add karva 
// document.createElement()
// append()
// prepand()
//remove()

const newTodoItem = document.createElement("li");

// const newTodoItemText = document.createTextNode("new todo")
newTodoItem.textContent="new todo"

const todolist = document.querySelector(".todo-list");

todolist.append(newTodoItem);   // pachal add kare
// todolist.prepend(newTodoItem);   // starting ma add kare

console.log(newTodoItem);


// remove karva 
const todo1 = document.querySelector(".todo-list li")
todo1.remove();
const todo2 = document.querySelector(".todo-list li")
todo2.remove();


// issert karva mate 
// after() aakhi <ul> ni aagal add kare 
//before() aakhi <ul> ni pachal add kare 