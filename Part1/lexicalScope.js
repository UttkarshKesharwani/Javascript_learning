

// lexical scope

const myVar = 'value'

function myApp(){

    const myFunc= ()=>{
        console.log("inside myFunc",myVar)
    }
    console.log(myVar)

}

myApp()