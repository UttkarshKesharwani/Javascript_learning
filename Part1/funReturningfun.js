// function returning function 

// function myFun(){
//     let hello = ()=>{
//         console.log("hello world")
//     }
//     return hello 
// }
// const ans = myFun()  // here myFun() returning a function , here ans variable store a fucntion 
// // console.log(ans());
// ans()




function myFun(){
    let hello = ()=>{
        console.log("hello world");
    }
    return hello 
}
const ans = myFun()  // here myFun() returning a function , here ans variable store a fucntion 
// console.log(ans());
const result=ans()
