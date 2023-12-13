// setInterval :- The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
// This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().

// setInterval fixed time delay ke bad lagatar function ko call krta rhega aur execute krta rheg funvtion ko
// setInterval function lega aur ek id return krega jis se tm setInterval ko rok sako 
console.log("script start");
const id=setInterval(() => {
    console.log(Math.random());
}, 1000);
console.log("script start");
// clearInterval(id)    // isko likhne se setInterval chlega hi nhi 