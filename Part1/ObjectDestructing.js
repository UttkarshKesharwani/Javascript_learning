
//object Destructing

const band={
    bandName:"led zepplin",
    famousSong:"stairway to heaven",
    year:1957,
    anotherFamousSong:"kashmir"
};

// let var1=band.bandName
// let var2=band.famousSong
// console.log(var1,var2);

let {bandName,famousSong} = band; // by default variable name is same as key name but you can define your own variable using semicollon followed by varable name
console.log(bandName,famousSong );

let {bandName:var1,famousSong:var2} = band;
console.log(var1,var2);


let {bandName1,famousSong1,...restProps} = band; //  restProps ke name se ek object banega jisme band ki keys and value jo variable me ni store hai vo sari key and value restProps ke object me aa jaegi 
console.log(restProps);



