// array


let fruit = ["banana", "mango", "santra"];
console.log(fruit);

fruit[1] = "chuiku";
console.log(fruit);

console.log(typeof(fruit));
console.log(Array.isArray(fruit));  // check karva array chhe ke nai



// array push ---> last ma add kare

fruit.push("narangi");
console.log(fruit);

// array pop ---> last thi delet kare

fruit.pop();
console.log(fruit);
console.log(fruit.pop()); // pop kareli vastu print kare
console.log(fruit);


// unshift --> starting ma add kare 

fruit.unshift("graps");
fruit.unshift("mosambi");
console.log(fruit);


// shift  --> starting mathi delet kare

let shiftedfruit =fruit.shift();
console.log(shiftedfruit);
console.log(fruit);
console.log("shifted fruit is", shiftedfruit);