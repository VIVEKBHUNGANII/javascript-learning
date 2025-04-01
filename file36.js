

const usermethod = {
    about:function(){
        return `${this.firstname} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >= 18;
    }
}

function createuser(firstname,lastname,email,age,address){
    const user ={};
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=usermethod.about;
    user.is18=usermethod.is18;
   
    return user;
}

const user1 = createuser("vivek","patel","vivekpatel9640@gmail.com",15,"ahmedabad");

const user2 = createuser("harsh","patel","vivekpatel9640@gmail.com",25,"ahmedabad");

const user3 = createuser("mohit","patel","vivekpatel9640@gmail.com",52,"ahmedabad");

console.log(user3.about());

// problem solve for method in above code 