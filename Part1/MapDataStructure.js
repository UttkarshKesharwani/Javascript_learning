// Map Data Structure
//A Map holds key-value pairs where the keys can be any datatype.A Map remembers the original insertion order of the keys.

// Essential Map Methods
// Method:-Description
// new Map():-Creates a new Map
// set():-Sets the value for a key in a Map
// get():-Gets the value for a key in a Map
// delete():-Removes a Map element specified by the key
// has():-Returns true if a key exists in a Map
// forEach():-Calls a function for each key/value pair in a Map
// entries():-Returns an iterator with the [key, value] pairs in a Map

// Property	Description
// size	Returns the number of elements in a Map


// How to Create a Map:-
//  You can create a JavaScript Map by:
// i). Passing an Array to new Map()
// ii).Create a Map and use Map.set()




//                     Object	                         Map
// Iterable  	Not directly iterable	             Directly iterable
// Size	        Do not have a size property	         Have a size property
// Key Types	Keys must be Strings (or Symbols)  	 Keys can be any datatype
// Key Order	Keys are not well ordered	         Keys are ordered by insertion
// Defaults 	Have default keys	                 Do not have default keys


// creating a map by passing an array 
const fruits=new Map([
    ["apples",500],
    ["banana",300],
    ["oranges",200],
])
console.log(fruits.get("apples")); // accessing value from map


// creating a map by using map.set() method
const newFruits=new Map()
newFruits.set("apple",500)
newFruits.set("bananas",300)
newFruits.set({userid:1},200)
newFruits.set("firstName","Uttkarsh")
newFruits.set("lastName","Kesharwani")
newFruits.set(1,"one")




// iterating map
// The keys() method of Map instances returns a new map iterator object that contains the keys for each element in this map in insertion order.

for(let key of newFruits){
    console.log(key);  // return key-value pair in Array
    // console.log(Array.isArray(key));  
}

for(let [key,value] of newFruits){
    console.log(key,value);
}

for(let key of newFruits.keys()){
    console.log(key);  // sari keys print ho rhi hai
}

