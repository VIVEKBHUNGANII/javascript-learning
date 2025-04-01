// elem.insertAdjacentHTML(where , html)
// beforebegin() ul pela add thai
//afterbegin()  li pela add thai
//beforeend()  li pachi add thai
//afterend()  ul pachi add thai

const todolist= document.querySelector(".todo-list")
todolist.insertAdjacentHTML("beforeend" , "<li>new todo</li>")    