// new keyword

function createuser(firstname , age){
    this.firstname=firstname;
    this.age=age;
}

createuser.prototype.about=function(){
    console.log(this.firstname,this.age);
}

const user1 = new createuser("vivek",20);

// new keyword --> 1) create empty object this ={}
// 2) return this
// 3) set proto automatic / link with this 
// new keyword proto set kare with this namna object sathe

user1.about();