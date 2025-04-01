// const usermethod = {
//     about:function(){
//         return `${this.firstname} is ${this.age} years old`
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return ' llaa lla la  aa'
//     }
// }

function createuser(firstname,lastname,email,age,address){
    const user = Object.create(createuser.prototype)  
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}

createuser.prototype.about=function(){return `${this.firstname} is ${this.age} years old`}
createuser.prototype.is18=function(){ return this.age >= 18;}
createuser.prototype.sing=function(){ return ' llaa lla la  aa'}

const user1 = createuser("vivek","patel","vivekpatel9640@gmail.com",15,"ahmedabad");

const user2 = createuser("harsh","patel","vivekpatel9640@gmail.com",25,"ahmedabad");

const user3 = createuser("mohit","patel","vivekpatel9640@gmail.com",52,"ahmedabad");

console.log(user2);
console.log(user2.about());