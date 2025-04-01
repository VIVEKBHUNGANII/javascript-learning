// async await

// await wait kare jya sudhi data resolve na thai tya sudhi

const URL = "https://jsonplaceholder.typicode.com/posts";

async function getpost() {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new error("something wrond"); // throw karvathi jo error aave to catch valo block chale throw na lakhavi to error aave to catch valo block na chale
  }
  const data = await response.json();
  return data;
}

getpost()
  .then((mydata) => {
    console.log(mydata);
  })
  .catch((error) => {
    console.log("inside catch");
    console.log(error);
  });
