// create function to cteate multiple objects


// we will make a function which create ojbect first and then add key:value pair and then return object 




// const users={
//     firstName:"uttkarsh",
//     lastName:"kesharwani",
//     email:"nikhilkesharwani@gmail.com",
//     age:20,
//     address:"Super market khaga fatehpur",
//     about:function(){
//         return `${this.firstName} is ${this.age} year old`
//     },
//     is18:function(){
//         return this.age >=18
//     }
// }  




// // isme jo method banae hai ham log vo har var alag alag user ke liye alag alag space ban rha hoga jis se jada memory lagegi

// function createUser(firstName,lastName,email,age,address,about,is18){

//     const user={}  // creating empty objects and then adding key value pairs 
//     user.firstName=firstName
//     user.lastName=lastName
//     user.email=email
//     user.age=age
//     user.add=address
//     user.about=function(){
//         return `${this.firstName} is ${this.age} year old`
//     }
//     user.is18=function(){
//         return this.age >=18
//     }

//     return user
// }

// const user1= createUser("uttkarsh","kesharwani" , "nikhilkehsarwani@gmail.com" ,15 ,"super market khaga fatehpur",)
// console.log(user1)
// const is18=user1.is18()
//console.log(is18);










// ham log method alag object me bananege aur useka refrence ham log log dege 

const userMethods={
    about:function(){
        return `${this.firstName} is ${this.age} year old`
    },
    is18:function(){
        return this.age >=18
    }
}
function createUser(firstName,lastName,email,age,address,about,is18){

    const user={}  // creating empty objects and then adding key value pairs 
    user.firstName=firstName
    user.lastName=lastName
    user.email=email
    user.age=age
    user.add=address
    user.about=userMethods.about
    user.is18=userMethods.is18

    return user
}

const user1= createUser("uttkarsh","kesharwani" , "uttkarshkehsarwani@gmail.com" ,20,"jwalaganj fatehpur")
const user2= createUser("nikhil","kesharwani" , "nikhilkehsarwani@gmail.com" ,17 ,"super market khaga fatehpur")
const user3= createUser("krish","kesharwani" , "krishkehsarwani@gmail.com" ,15 ,"G.T road khaga fatehpur")

console.log(user1.about());
console.log(user2.about());




// ----------------xxxxxxxxxxxx--------------------xxxxxxxxxxxxxxxxxxxxxxx-----------------


