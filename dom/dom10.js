// static list vs live list

// queryselector static class de
// getelementby....    live list de

const ul = document.querySelector(".todo-list")
// const listItems = document.querySelectorAll(".todo-list li");
const listItems = ul.getElementsByTagName("li");

const sixli = document.createElement("li");
sixli.textContent="item 6"
ul.prepend(sixli)

console.log(listItems)