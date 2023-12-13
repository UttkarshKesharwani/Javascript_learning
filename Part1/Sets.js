// Sets :- A JavaScript Set is a collection of unique values just like array.Each value can only occur once in a Set.
// A Set can hold any value of any data type.it is iterable

// Sets   Methods
// Method	Description
// new Set():-Creates a new Set
// add():-Adds a new element to the Set
// delete():-Removes an element from a Set
// has():-Returns true if a value exists
// clear():-Removes all elements from a Set
// forEach():-Invokes a callback for each element
// values():-Returns an Iterator with all the values in a Set
// keys():-Same as values()
// entries():-Returns an Iterator with the [value,value] pairs from a Set


// How to Create a Set
// You can create a JavaScript Set by:
// Passing an Array or string  to new Set()  
// Create a new Set and use add() to add values/variables

//initalise set :- const number = new Sets()

// Note:- there is no index based acces


const arr=[1,1,1,2,3,3,3,3,4,5]
const numberSet=new Set(arr)
console.log(numberSet)


const num=new Set()
const a=5
num.add(0)
num.add(a)
num.add(2)
num.add(2)
num.add(numberSet) // ye same hai lekin isme memory me ek hi address banega isliye ek hi bar add hoga
num.add(numberSet)
num.add([1,2,3,"uttkarsh","kesharwani"])  // ye dono same hai lekin add ho jaega kyuki iska address alag alag hai memory me
num.add([1,2,3,"uttkarsh","kesharwani"])
console.log(num);
console.log(num.size);


if(numberSet.has(1)){
    console.log("One is present");
}else {
    console.log("one is not present")
}


// iterating set name as numbers 
for(let number of numberSet){
    console.log(number)
}


const size=numberSet.size  // return size of the elemnts that are stored in set
console.log(size);




