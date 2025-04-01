// call , bind , apply


// call
function about(hobby,favmusic){
    console.log(this.name , this.age , hobby , favmusic)
}
const user1 = {
    name: "vivek",
    age: 19 ,
}
const user2 = {
    name: "ram",
    age: 11 ,
}

about.call(user1 , "music","sanam re");

// apply
about.apply(user2,["gitar","omphoo"]) // parameter array ma lakhavani

// bind
const func = about.bind(user1,"gitar","blalal");
func();  // bind function return kare




// this  keyword for arrow function

const user = {
    name : "vivek",
    age : 45,
    about : () => {
        console.log(this.name , this.age);
    }
}

user.about();

// arrow function ma this keyword window ne select kare  atale ke te object ne nakre 