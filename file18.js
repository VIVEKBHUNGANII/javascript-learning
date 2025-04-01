// object inside array

const users = [
    {userid:1,firstname:"vivek",gender:"male"},
    {userid:2,firstname:"raghu",gender:"male"},
    {userid:3,firstname:"priti",gender:"female"},
]

for(let user of users){
    // console.log(user);
    console.log(user.firstname);
}


// desteructuring 

const [user1,user2,user3]=users;
console.log(user1);
console.log(user3);

const [{firstname:user1name}, , {gender}]=users;
console.log(user1name);
console.log(gender);