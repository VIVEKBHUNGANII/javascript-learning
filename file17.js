// spread operator in object

const obj1 = {
    key1: "value1",
    key2: "value2"
}
const obj2 = {
    key3: "value3",
    key4: "value4"
}
const newobj = {...obj1, ...obj2 , key5 : "key5"};
console.log(newobj);



// destructuring in object

const band = {
    bandname : "band japlin",
    favsong : "bale bale ",
    year : 1555,
    second : 2222,
}

// const bandname = band.bandname;
// const favsong = band.favsong;
// console.log(bandname , favsong);

const {bandname , favsong , ...restprop} = band ;
console.log(bandname);
console.log(restprop);

