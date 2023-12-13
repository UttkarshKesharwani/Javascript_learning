// call,apply,bind methods in js

// call():- we call any function with function_name.call() method

// apply():-






function hello(){
    console.log("hello world");
}
hello.call()




// const user1={
//     firstName:"uttkarsh",
//     age:8,
//     about:function(hobby,favMusician){
//         console.log(this.firstName,this.age,hobby,favMusician);
//     }
// }
// user1.about("sleeping","arjit sing")
// //or
// user1.about.call(user1,"Playing","lata mangeskar")  


// // ham log ko user1 object ka method() use krna hai user2 ke liye
// const user2={
//     firstName:"nikhil",
//     age:13,
// }
// user1.about.call(user2,"watching movies","darshan raval")  // agar .call("this") lga rhe hai to hame this ki value btani padegi ki "this" kis object ko point krega




// ham log yha pr direct function bna lete hai aur about method object ke andar se hta dete hai 

function about(hobby,favMusician){
    console.log(this.firstName,this.age,hobby,favMusician);
}

const user1={
    firstName:"uttkarsh",
    age:8,
}
about.call(user1,"playing","katty perry")

const user2={
    firstName:"nikhil",
    age:13,
}
about.call(user2,"watching movies","Shreya Ghosal")



// ----------------xxxxxxxxxx---------------xxxxxxxxxxxxxxx-----------------xxxxxxxxxx---------
// apply :-ye bhi call ki tarah hai 
about.apply(user1,["guitar","bach"])  //ham log upar alag alag argument pass kr rhe yha pr list pass kr dege matlab hm log ek hi array me sare agrgument pass kr dege 


//-----------xxxxxxxx------------------xxxxxxxxxxxx--------------------xxxxxxxxxxxxx
// bind():-  
const func=about.bind(user1,"guitar","bach") // bind print nhi krega ye ek function return krta hai
func()

//----------------xxxxxxxxxxxxx--------xxxxxxxxxxxxx---xxxxxxxxxxxxxx----------
// small warning

const Users={
    firstName:"nikhil",
    age:13,
    about:function(){
        console.log(this.firstName,this.age);
    }
}
// don't do this mistake:-User1.about
const myFun=Users.about.bind(Users)
myFun()



