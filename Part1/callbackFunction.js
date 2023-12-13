// callback function:- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// function myFun(a){
//     console.log(a)
// }
// myFun({Name:"uttkarsh",age:19})
// myFun([1,2,3,4,5])    //  we can pass object,function,string,integer,array it could be anything 


function myFun2(name){
    console.log("inside fun2");
    console.log('name is' ,name);
}

function myFun(callback){ // here value 'callback' accept the function myfun2 in 'callback' , and later we are calling this callback()
    console.log('hello world');
    callback("harshit")
}
myFun(myFun2)   
// or 
// myFun(()=>{
//     console.log("this is another callback method");
// })




