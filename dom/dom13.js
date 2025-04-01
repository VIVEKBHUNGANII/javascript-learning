// event object
//je event perform thai aeni information aape browser object na form ma

const allbtn = document.querySelectorAll("button");

for (let button of allbtn) {
  button.addEventListener("click", (event) => {
    console.log(event.currentTarget);
    event.target.style.backgroundColor = "red";
  });
}
