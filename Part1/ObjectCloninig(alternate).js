// there is another way to create empty Object

//JavaScript object.create() method is used to create a new object with the specified prototype object and properties.
//  Object.create() method returns a new empty object with the specified prototype object and properties. 


// const obj1={
//     key1:"value1",
//     key2:"value2",
// }
// const obj2 ={
//     key3:"valu3"
// }
// console.log(obj2.key1); // mai cahta hu ki obj2 ke pass key1 dekhe agar mile to print krde, aur agar nhi hai to obj1 ke pass jae aur dekhe agr uske pass hai to print kr de 


const obj1={
        key1:"value1",
        key2:"value2",
}

const obj2=Object.create(obj1) // this method create a new empty object name as obj2  and yha pr obj2 ka proto obj1 set ho rha hai 
console.log(obj2); // abhi empty object bna hai 

obj2.key3="vlaue3"
console.log(obj2.key2); // obj2 me key2 nhi hai to vo gya obj1 ke pass aur check kiya key1 ko

console.log(obj2.__proto__);
