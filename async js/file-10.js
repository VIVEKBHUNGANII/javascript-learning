// using promise

const URL = "https://jsonplaceholder.typicode.com/posts"

function sendrequest(method , url){
    return new Promise(function(resolve , reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method , url);
        xhr.onload=function(){
            if(xhr.status >= 200 && xhr.status < 300 ){
                resolve(xhr.response);
            }else{
                reject("something wrong");
            }
        }
        xhr.onerror=function(){
            console.log("something wrong")
        }
        xhr.send();
    })
}

sendrequest("GET" , URL)
.then(response=>{
    const data = JSON.parse(response);
    // console.log(data)
    return data;
})
.then(data=>{
    const id = data[3].id;
    // console.log(id);
    return id ;
})
.then(id=>{
    const url = `${URL}/${id}`  // aa url ma id add thai jay atale response ma khali ak j id valo object aave
    // console.log(url)
    return sendrequest("GET", url);
})
.then(newresponse=>{
    const newdata = JSON.parse(newresponse);
    console.log(newdata);
})
.catch(error=>{
    console.log(error)
})