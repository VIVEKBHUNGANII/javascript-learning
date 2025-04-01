// fetch 
// fetch promise return kare
// fetch by default get method send kare
const URL = "https://jsonplaceholder.typicode.com/posts"

fetch(URL)
.then(response =>{
    if(response.ok){
        return response.json();
    }
    else{
        throw new error("something wrong");
    }
})
.then(data=>{
    console.log(data);
})
.catch(error=>{
    confirm.log(error)
})