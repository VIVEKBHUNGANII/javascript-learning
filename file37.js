
const usermethod = {
    about:function(){
        return `${this.firstname} is ${this.age} years old`
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing: function(){
        return ' llaa lla la  aa'
    }
}

function createuser(firstname,lastname,email,age,address){
    const user = Object.create(usermethod)    // khali object banavi usermwthod sathe chain karo   usermethod lakhu e proto set karo atale je item na male e proto ma jai ne check kare
    user.firstname=firstname;
    user.lastname=lastname;
    user.email=email;
    user.age=age;
    user.address=address;
    return user;
}

const user1 = createuser("vivek","patel","vivekpatel9640@gmail.com",15,"ahmedabad");

const user2 = createuser("harsh","patel","vivekpatel9640@gmail.com",25,"ahmedabad");

const user3 = createuser("mohit","patel","vivekpatel9640@gmail.com",52,"ahmedabad");

console.log(user2);
console.log(user2.about());

// aa code ma chain ni madad thi ak var function banavi khali obj sathe jodi didho atale atale badha user mate lakhavu na pade

// __proto__  , [[prototype]] same kevai