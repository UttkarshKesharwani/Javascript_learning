// Promises:- ye ek aise value hai jo hme  abhi nhi pta bad me pta hogi
// A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.Creates a new Promise.
// i.e yha pr resolve , reject dono hi callback hai jo bataege ki resolve hone pr kya hua reject hone pr kya hua 


//   "Producing code" is code that can take some time

//  "Consuming code" is code that must wait for the result

//  A Promise is a JavaScript object that links producing code and consuming code





const bucket =['coffee','chips','vegetables','salt','rice']


const friedRicePromise= new Promise((resolve,reject)=>{
    // "Producing Code" (may take some time)
    if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice")   // when successful
    }else{
        reject("couldn't do it")  // when error
    }
})


// consuming  code

//Promise.then() takes two arguments, a callback for success and another for failure.
//Both are optional, so you can add a callback for success or failure only.

friedRicePromise.then(           // then method hamesha promise return krta hai 
    //ye chlega jab promise resolve hoga 
    (myfriedRice)=>{ console.log("lets eat",myfriedRice)},
    // ye chlega jab promise reject hogi 
    (error)=>{  console.log(error);}    
)

// friedRicePromise.then(
//     //ye chlega jab promise resolve hoga 
//     (myfriedRice)=>{ console.log("lets eat",myfriedRice)}  
// ).catch(
//     (error)=>{ console.log(eroor);}
// )

// Promises with setTimeout()

// Note :- 1) Promise ka task hmesha microtask queues me jata aur vhi jitne bhi function hote hai vo sb callback queue me jate hai
        // 2) Agar koi task microtask queue me bhi hai aur callvack queue me bhi hai, to microtask queue vala task chlega kyuki microtask queue ki proiority jada hai as compared to callback queue
setTimeout(()=>{
    console.log("hello from setTimeout");
},0)


