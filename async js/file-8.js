const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open("GET", url);

// xhr.onreadystatechange= function(){
//     if(xhr.readyState === 4){
//         // console.log(xhr.response)  // response string ma return kare
//         const response = xhr.response;
//         const data=JSON.parse(response)
//         console.log(typeof data);
//     }
// }

// uper nu onreadystate valu function jyare jyare state change thai tyare run thai

// niche valu function jyare state 4 thai jay tyare j run thai
// bane same j work chhe

xhr.onload = function () {
  const response = xhr.response;
  const data = JSON.parse(response); // js object ma convert karo response ne
  console.log(typeof data);
};

xhr.send();
