// innerHTML
const headline = document.querySelector(".headline");
console.log(headline)

headline.innerHTML = "<h1>inner html change </h1>";
headline.innerHTML += "<button class = \"btn\">learn more </button>"
console.log(headline.innerHTML);