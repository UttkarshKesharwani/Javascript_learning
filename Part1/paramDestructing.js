
// param destructiong  :- wroks with object

const person ={
    firstName:"harshit",
    gender:"male"
}


function printDetails(obj){
    console.log(obj.firstName);
    console.log(obj.gender);
}

printDetails(person) // passing object
  
// Another method

function printDetails1({firstName,gender}){  // here in parameter directly we are destructering the object
    console.log(firstName);
    console.log(gender);
}

printDetails1(person)  // passing object