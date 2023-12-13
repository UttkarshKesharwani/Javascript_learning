// methods using arrow function

// Note:- arrow function me "this" nhi hota hai,arrow function "this" apne surronding se leta hai mtlb ek level uoar se leta hai 
// Note:- arrow function ka this aap change nhi kr skte hai call() method ko call krke

const Users={
    firstName:"nikhil",
    age:13,
    about:()=>{
        console.log(this.firstName,this.age);
    }
}

Users.about()


//--------xxxxxxxxxx-xxxxxxxxxxxxxxx---------xxxxxxxxxx
// short syntax


const User1={
    firstName:"nikhil",
    age:13,
    about:function(){
        console.log(this.firstName,this.age);
    }
}
User1.about()

// method likhne ka alternate tarika hai 

const User2={
    firstName:"uttkarsh",
    age:13,
    about(){
        console.log(this.firstName,this.age);
    }
}
User2.about()
