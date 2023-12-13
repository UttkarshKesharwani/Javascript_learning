// hoisting 
// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

//  In hosting we can access function before initialization, by invoking function name

// In function declaration we can use hoisting 
hello()
function hello(){
    console.log("hello world");
}



// In function expression we cannot use hoisting 
hello1()
const hello1=function(){  // we cannot access either let/const/var
    console.log("hello world");
}




// In arrow function we cannot use hoisting 
hello2()  // here also cannot access
let  hello2 = () => {
    console.log("hello world");
}
 




