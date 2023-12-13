// Arrays
// sytax = let array_name = ["item1","item2","item3"....5,4,8.4 .... ..] i.e we can store any type of data in the same array 

// Note:- We can also store another array inside one single array 
// Note :- type of the array is  object

let numbers=["one","two","three",1,2,3,4.5,null,undefined]
let obj={} // this is object literals

console.log(numbers);
console.log(typeof numbers);  // ans will be object

console.log(Array.isArray(numbers)); // to check this is array or not
console.log(Array.isArray(obj));

// ---------------------x--------x----------x-------------

// push(),pop(),unshift(),  method in array


// push() method:- it push any value of any datatype in the last index of the array   
numbers.push(15);
console.log(numbers);


//pop() method:- this method will remove the last index of the array and it also return the value of string (thus you can easily store the last value in the other variable)
 let poppedNumber=numbers.pop() // here 15 removed from the array and return the value of the last index which store in the variable callled poppedNumber
console.log("poppedNumber no is ",  poppedNumber)
console.log(numbers);


//unshift() method:- this method will add the any value of any datatype in the first index of the array
numbers.unshift("uttkarsh") 
numbers.unshift('kesharwani')
console.log(numbers);


//shift():- this method removed the elements from the starting index of the array and also return that element
let removedNumber=numbers.shift() // it will remove the starting element of the array and return that element
console.log(removedNumber);
console.log(numbers);


// Note:- push and pop are fast as compared to shift and unshift


// -------------------xxxxxxxxxxxxxxxxxxxxx-----------------------xxxxxxxxxxxxxx------------------

// for loop in the array 

let fruits = ["apple","mango",1,2,3,4,5,null,4.5]
let size = fruits.length
for(let i=0;i<size-1;i++){
    console.log(fruits[i]);
}


// use const for creating array 

const array=["apple","mango"]
// array=["new apple","new mango"]   // we cannot assign array again bcox of const
array.push("banana")
console.log(array);

// for of loop in array :-The JavaScript for of statement loops through the values of an iterable object.

const newFruits=["apple" , "mango","banana", "grapes"]
for(let newFruit of newFruits){
    console.log(newFruit)
}

// for in looop in array 

let fruit=['apple','mango','grapes']
for(let index in fruit){
    console.log(fruit[index]);
}
