
// block scope vs function scope


{
   
    let firstName="uttkarsh" // let and const are block scope and thus cannot access outside the block
    var lastName="kesharwani" 
}
// console.log(firstName);  
console.log(lastName);

function myApp(){
    if(true){
        let var1="nikhil"
    }
    console.log(var1);
}


// myApp()



// ----------------------xxxxxxxxxxxx-xxxxxxxxxxxxxx------------------xxxxxxxxxxxxxxxxxxxxxxx
// Default parameter


// function addTwo(a,b){
//     if(typeof b === "undefined") b=1  
//     return a+b
// }

function  addTwo(a,b=0){
    return a+b
}


const ans=addTwo(4) // here we are passing two parameter in function and passing one value in while invoking a function
console.log(ans);



// ----------------------xxxxxxxxxxxx-xxxxxxxxxxxxxx------------------xxxxxxxxxxxxxxxxxxxxxxx
// Rest parameter

function myFunc(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}


myFunc(3,4,5,6,4,7,8,8) // a me 3 jaega ,  b me 4 jaega and iske bad sare elements c me jaege as a array , lekin c parameter ke aage 3 dot lagana padega 


function addAll(...numbers){
    let sum=0
    for(let number of numbers) {
        sum+=number
    }
    console.log(sum);
}


addAll(1,2,3,4,5,6)
