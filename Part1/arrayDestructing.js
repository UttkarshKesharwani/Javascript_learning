

// array destructing :-  With the syntax of destructuring, you can extract smaller fragments from objects and arrays.
                        //  It can be used for assignments and declaration of a variable.Destructuring is an efficient way to extract multiple values from data that is stored in arrays or objects. 
                        // When destructuring an array, we use their positions (or index) in an assignment.



const myArray = ["value1","value2"]

// let myVar1=myArray[0];
// let myVar2=myArray[1];
// console.log(myVar1);
// console.log(myVar2);


//example 1 
let [myVar1,myVar2,myVar3]=myArray
console.log(myVar1);
console.log(myVar2);
console.log(myVar3);

// example 2
var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
var [color1, ,color2, ,color3]=colors   //Leave space for unpick elements
console.log(color1);
console.log(color2);
console.log(color3);


// example 3
var colors1 = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red","Black","Grey"];  
let [colorx, ,colory, ,colorz, ... myrestColors]=colors1   
console.log(colorx);
console.log(colory);
console.log(colorz);
// myrestColors ke name se ek array banega jisme colors1 ki sari value jo variable me ni store hai vo sari value myrestColors ke array last index tak sari values aa jaegi 
console.log(myrestColors);
