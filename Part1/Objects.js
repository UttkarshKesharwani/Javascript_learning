
// Objects :- It stores key vlaue pairs, it don't have index,it is refrence type


// how to create objects:- Syntax
// const object_name={
//     key:value,
//     key:value,
//     key:value,
//     key:value
// };


const person ={
    "first Name":"Uttkarsh",
    lastName:"Kesharwani",
    age:15,
    hobbies:["playing game","listening music","playing game"] // we can also define array insde object
};

//how to access data from objexts 
//syntax:-  objectName.propertyName  Or  objectName["propertyName"]
console.log(person.lastName);
console.log(person["first Name"]);
console.log(person.hobbies);


//how to add key value pair to existing object :Syntax-
// object_name.key = value  Or object_name["key"] = value
person.Gender="Male"
console.log(person.Gender);

// 4:11:10 :- left



