// What is Method :- Fucntion inside object called Method


const person={
    firstName:"uttkarsh",
    age:8,
    about: function(){
        console.log(this);  // i.e 'this' is a object that points the object names as person
        console.log(this.name);  // i.e 'this' is a object that points the object names as person
        console.log(`person name is ${this.firstName} and age is ${this.age}`); 
    }
}
person.about()




function personInfo(){
    console.log(`person name is ${this.firstName} and age is ${this.age}`)
}

const person1={
    firstName:"nikhil",
    lastName:"kesharwani",
    age:21,
    about:personInfo
}

const person2={
    firstName:"krish",
    lastName:"kesharwani",
    age:18,
    about:personInfo
}

const person3={
    firstName:"braj kishor",
    lastName:"kesharwani",
    age:45,
    about:personInfo
}

person1.about()
person2.about()
person3.about()


