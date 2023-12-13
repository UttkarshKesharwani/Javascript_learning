
//spread operator in objects
const obj1={
    key1:'vlaue1',
    key2:'value2'
};
const obj2={
    key1:"uniqueValue",
    key3:'vlaue3',
    key4:'value4'
};


const newObject={...obj1}  // cloning of obj1 to newObject
console.log(newObject);


const newObject1={...obj2,...obj1  , key5:"value5"} // cloning of obj1 and obj2 to newObject1 and adding key5
// yha pr obj1 and obj2 dono me key1 hai, jb ham log newObject1 me spread krege obj1 and obj2 ko to jo bad me spread hoga usi ka key1 liya jaega
console.log(newObject1);


// converting string to object
const newObject3={..."abc"} // string can be iterabel and can be spread ... corresponding indexx key ban jaegi aur aur string ka charackter uska value ban jaega
console.log(newObject3);

// coveritng array to object
const newObject4={...["item1","item2"]} // string can be iterabel and can be spread ... corresponding indexx key ban jaegi aur aur string ka charackter uska value ban jaega
console.log(typeof newObject4);