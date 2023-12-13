
// fucntion returting promised

const bucket =['coffee','chips','vegetables','salt','rice']

function ricePromise(){
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
            resolve("Fried Rice")   // when successful
        }else{
            reject("couldn't do it")  // when error
        }  
    })
}


ricePromise().then(
    //ye chlega jab promise resolve hoga 
    (myfriedRice)=>{ console.log("lets eat",myfriedRice)},
    // ye chlega jab promise reject hogi 
    (error)=>{  console.log(error);}    
)





// promise resovle 

const newPromise=Promise.resolve(5)  // return a new resolved promise in which value will be 5 
// yha pr newPomsie ek promise hai jo ki resolved hai aur uski value hai 5
newPromise.then((value)=>{
    console.log(value);
})



