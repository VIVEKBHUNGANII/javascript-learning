// create many object using function
// function 
// 1) that function create object
// 2) add key pair value
// 3) return object


function createuser(firstname,lastname,email,age,address){
    const user ={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=function(){
        return `${this.firstname} is ${this.age} years old`
    };
    user.is18 = function(){
        return this.age >= 18;
    }
    return user;
}

const user1 = createuser("vivek","patel","vivekpatel9640@gmail.com",15,"ahmedabad");
console.log(user1);

const above18 = user1.is18(); // method check kari aahiya
console.log(above18);

const about = user1.about();
console.log(about);
 

// this code with many problems like badha user mate alag method create thai atale memory space roke