// truthy and falsy values

// falsy values are = "" , flase,  null , undefined , 0
// truthy values are = "abc" , 1 , -1


// falsy code always give false if this condition will not work 
let firstName ;
if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kind a empty");
}



// truthy code always gives truth values , thus if condition will work
let secondName=1;
if(secondName){
    console.log(secondName);
}else{
    console.log("Truthy code ");
}
