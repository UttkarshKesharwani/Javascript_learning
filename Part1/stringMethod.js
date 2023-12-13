// trim() :- The trim() method removes whitespace from both sides of a string.The trim() method does not change the original string as string is immutable in Js and in result it retun a new string in which whitespace at the staring and ending of the string  will be removed.
// toUpperCase() :- this method uppercase all the charachter of the array and return new string  .
// toLowerCase() :-this method lowercase all the charachter of the array and return new string  .
// slice() :- The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.




let myName="   Uttkarsh kesharwani  "
console.log(myName.length);
console.log(myName)


myName=myName.trim()  // you can store this trim string to the new variable or existing variable its totally up to u.
console.log(myName.length);
console.log(myName)

// toUpperCase

myName=myName.toUpperCase()
console.log(myName);


// toLowerCase

myName=myName.toLowerCase()
console.log(myName);


// slice()

// syntex wil bee :- stingName.slice(starting idx, ending idx) where ending idx not include

let newName=myName.slice(0,12)
console.log(newName);



