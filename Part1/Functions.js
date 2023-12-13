// Functions in javaScript

// Syntax:-function function_name(var1,var2,var3,.....) {
//     // code to be executed
//   }

function sum(num1,num2){
    let s = num1+num2;
    console.log(s)
}

sum(7,5)


// create function to check wherehter it is even or not if even then retrun treu

function isEven(num){
    if(num%2==0){
        return true
    }
     return false
}

let bool=isEven(4)
console.log(bool)


// create function which takes string and which gives output as first charachter of string 

function firstCharacter(anyString){
    return anyString[0];
}

console.log(firstCharacter("nikhil"))

// create function for linear searching 

function linearSearch(arr,target){
    let idx=-1
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
           return i;
        }
    }
   return -1
}

let arr=[1,2,3,4,5,6]
let target=5
let result=linearSearch(arr,target)
console.log(result)



// -----------------------xxxxxxxxx------------xxxxxxxxxxx--------------xxxxxxxxxxxxxx---------


// function expression :- we assign a functionn in a variable and variable itself treated as function_name
//Function Expression is used to define a function inside any expression. The Function Expression allows us to create an anonymous function that doesn’t have any function name which is the main difference between Function Expression and Function 
// . A function expression can be used as an IIFE (Immediately Invoked Function Expression)which runs as soon as it is defined.
// A function expression has to be stored in a variable and can be accessed using variableName.

// syntax:-
// let variableName = function(value1,value2) { statements... return (z) };

// anonymous function for sum of two no 

let sumoftwoNo=function(num1, num2){
    return (num1+num2)
}

let sum1 =sumoftwoNo(5,4)
console.log(sum1);
    // or
console.log(sumoftwoNo(5,4));


// ---------------------------------xxxxxxxxxxxxxx-xxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxx------------------


// Arrow function:- Arrow functions allow us to write shorter function syntax
// syntax:- let myFunction = (a, b) => {  
              // code
// }

// It gets shorter! If the function has only one value as parameter, and the parameter returns a value, you can remove the brackets and the return keyword:


let hello = () => { // here we are giving 0 parameter but we cannot remove parenethesis
    console.log("hello world")
}

hello()

// sum of two no using arrow function 

let Sum = (a,b) =>   a+b; // we can remove return keyword

let ans =Sum(5,9);
console.log(ans);

// check wether given integer is odd or not using arrow function

let isOdd = n =>{ // if function takes only one value as a parameter then we can remove parenthesis
      if(n%2!=0) console.log("odd function");
}
isOdd(5);




// -------------xxxxxxxxxxxx-----------------xxxxxxxxxxxxx---------------xxxxxxxxxxxxxxx-------------

// Function inside Function

const fun1 = () => {
    const fun2 = () =>{
        console.log("this is function inside funtion");
    }
    fun2()
    console.log("hey ! i will be there ");
}
fun1()

function Arithmatic(){

    function sum(a,b) {
        return a+b
    }

    function minus(a,b) {
        return a-b
    }

    let multiply= function(a,b){
        return a*b
    }
   
    let divide = (a,b) => a/b

    console.log("we are goiing to do arithmatic operations");
    
    console.log(sum(4,5));
    console.log(minus(4,5));
    console.log(multiply(4,5));
    console.log(divide(4,5));


}
Arithmatic() // mujhe andar wale funtion ko call krne ke liye main vala function ko call krana pdega aur jo fun andar define hai usko usi main function me call krna hoga 