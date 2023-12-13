// closures :- A closure is a function having access to the parent scope, even after the parent function has closed.
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.





// function printFullName(firstName,lastName){
//     function printName(){
//         console.log(firstName,lastName);
//     }
//     return printName
// }

// const ans = printFullName("harshit","shama")
// ans()



// example 2

// function hello(x){
//     const a ="var1"
//     const b ="var2"
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans1 = hello(5)
// ans1()



// example 3

// function MyFunction(power){
//     return function(number){
//         return number**power
//     }
// }
// const square=MyFunction(3)
// const ans2=square(2)
// console.log(ans2);


// example 4

function fun(){
    return function(){
        let counter=0;
        if(counter<1){
            console.log('hi you called me');
            counter++
        }else{
            console.log("mai already call ho chuka hu");
        }
    }
}
const myfun=fun()
myfun()
myfun()
myfun()
myfun()

