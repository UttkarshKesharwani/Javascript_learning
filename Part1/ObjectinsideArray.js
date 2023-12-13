// objects inside array
// very useful in real world applications

let users =[ 
    {user_id:1,firstName:'Harshit',Gender:'Male'}, // 1st useer information
    {user_id:2,firstName:'Uttkarsh',Gender:'Male'}, // 2nd useer information
    {user_id:3,firstName:'Siddhant',Gender:'Male'} // 3rd useer information
]

console.log(users)


for(let i=0;i<users.length-1;i++) {
    console.log(users[i]);
}

for(let user of users){
    console.log(user);
}

for(let user of users){
    console.log(user.user_id);
}

console.log(users[0].user_id);
console.log(users[0].firstName);


// -----------------xxxx------------------xxx--------------------xxx----------------xxx-------------------

// nested destructing 


let [user1,user2,user3]=users;
console.log(user1);
console.log(user1.firstName);
    // Or
let [{firstName}, ,{user_id}]=users
console.log(firstName)
console.log(user_id)
    // or 
let [{firstName:var1}, ,{user_id:var2}]=users
console.log(var1)
console.log(var2)