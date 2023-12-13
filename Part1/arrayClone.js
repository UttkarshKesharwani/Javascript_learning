//How to clone array
// How to concatenate two arrays
// spread operator , slice() ,spread operator



let array1=["item","item2"];
// let array2=["item","item2"];
// let array2=array1.slice(0);
// let array2=[].concat(array1);

//new way (spread operator)
let array2=[...array1,"new ele","new ele1"];  // spread operatot (new way )


array1.push("item3")
console.log(array1);
console.log(array2);



// spread in array of string type

let newArray=[..."abc"] // string is iterable therefore it can spread
// let newArray1=[...1234567] // this integer is not iterable 
console.log(newArray);

