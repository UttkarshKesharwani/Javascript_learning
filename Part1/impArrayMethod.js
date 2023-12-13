// Important methods in array
// Topics to be covered :- for each, map method, filter , reduce,sort , find ,some,every,fill







// 1) for each method():- this method always recieve callback() function
//A function that accepts up to three arguments. forEach calls the callbackfn function  for every element in the array.
const numbers=[1,2,3,4,5]

function multiplybytwo(number,index){
    console.log('index is',index);
    console.log(number*2);
}

// multiplybytwo(numbers[0],0)
// multiplybytwo(numbers[1],1)
// multiplybytwo(numbers[2],2)
// multiplybytwo(numbers[3],3)

numbers.forEach(multiplybytwo) // always passes element and its index automaticaly
  // or another method 
numbers.forEach(function(number,index){ // here index is redundant
    console.log(number*2);
})

// real life use of for each method()
const users=[
    {firstName:"uttkarsh",age:21},
    {firstName:"nikhil",age:27},
    {firstName:"krish",age:17},
    {firstName:"aman",age:19}
]

users.forEach(function(user){
    console.log(user.firstName);
})


// ------------xxxxxxxxxxxxxxxxx------------------xxxxxxxxxxxxxxxxxxx------------------xxxxxxxxx
// 2) map method():-map() creates a new array from calling a function(anonymous/callback func) for every array element. it also recieve callback function().
// map() does not change the original array.

const numbers1=[2,7,6,5]

const square=function(number,index){ // index is redundant here
    return number*number  // here we can also return index 
}

const newsquareArray=numbers1.map(square) //Return a new array with the square root of all element values:   (agar ham log function me return nhi krte hai to automatic vale undefined lega aur arrray me sare me undefined store ho jaega)
console.log(newsquareArray);

// alternate way for map()

let square1 =numbers1.map(function(numbers){
    return numbers*numbers
})
console.log(square1);



const users1=[
    {firstName:"uttkarsh",age:21},
    {firstName:"nikhil",age:27},
    {firstName:"krish",age:17},
    {firstName:"aman",age:19}
]

const allNamesinArr=users1.map(function(names){
        return names.firstName
})
console.log(allNamesinArr);




// --------------xxxxxxxxxxxxxxxxxx-----------------xxxxxxxxxxxxxxxxxx-----------------

// filter Method:- it also take callback fun and always return a boolean value
// this method always return boolean values
// The filter () method creates a new array filled with elements that pass a test provided by a function. 


//filetering even and odd number
const num= [2,34,1,4,5,7,8,94]
const isEven=function(number){
    return number%2===0
}
const isOdd=function(number){
    return number%2!==0
}


const evenNumbers=num.filter(isEven) //Returns the elements of an array and form a new arryay that meet the condition specified in a callback function.
console.log(evenNumbers)

const oddNumbers=num.filter(isOdd);
console.log(oddNumbers);


// alternate way 
const evenNo=num.filter((number)=> {return number%2===0})
console.log(evenNo);
const oddNo=num.filter(function(number){
    return  number %2 !==0
})
console.log(oddNo)


// ------------------xxxxxxxxxxxxxxx----------------xxxxxxxxxxxxxxxx---------------------xxxxxxxxxxxxxx---------
//Reduce method():-
//Use it when: You have an array of amounts and you want to add them all up.

const myNumbers=[7,8,9,4,5,6,1]
// sum of all the numbers in array 
const sum=numbers.reduce((accumulutor,currentValue)=>{
    return accumulutor+currentValue
}) 
console.log(sum);
// accumulator , currentValue , return 
// 7                 8           15

// 15                9           24
// 24                4           28
// 28                5           33
// 33                6           39
// 39                1           40



const userCart=[
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"charger",price:1000},
    {productId:3,productName:"earphone",price:1200},
]

const sumofPrice=userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice + currentProduct.price
},0)  // here 0 is initial amount
console.log(sumofPrice);

// totalPrice     currentProduct        return  
// 0                {}                   12000
// 12000            {}                   13000
// 13000            {}                   14200


// ------------------xxxxxxxxxxxxxxxxx----------------------------xxxxxxxxxxxxxxxxxx-------------------------xxxxxxxxxxxxxxxxx


// sort method():-The sort() sorts the elements of an array.The sort() overwrites the original array.
//The sort() sorts the elements as strings in alphabetical and ascending order.



const fruits = ["banana","pineapple", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

const Numbers=[5,9,1200,400,3000] // .js sare no ko as a string sort krti hai 
// ["5","9","1200","400","3000" ]
// corresponding ASCII are 
// [53,57,49,52,51]
Numbers.sort()
console.log(Numbers);
console.log(Numbers.reverse())

// or 
Numbers.sort((a,b)=>{
    return a-b    // if we do a-b then sorting will done on ascending order and if b-a then it will done on descending order
})
console.log(Numbers)



// price lowToHigh  HighToLow
const products=[
    {Id:1, Name : "kahana",price: 1200},
    {Id:2, Name : "khaajana",price: 800},
    {Id:2, Name : "khaajana",price: 900},
]

// low to high 
const lowTohigh=products.slice(0).sort((a,b)=>{  // agar ham log slice nhi use krege to sort method original array ko hi sort kr dega and slice method always return new array thus we store in low to high variable 
    return a.price-b.price
})
console.log(lowTohigh);

// high to low 
const highTolow=products.slice(0).sort((a,b)=>{  // agar ham log slice nhi use krege to sort method original array ko hi sort kr dega and slice method always return new array thus we store in  high  to low variable 
    return b.price-a.price
})
console.log(highTolow);



// ---------------xxxxxxxxxxxxx---------------xxxxxxxxxxx--------------
// find method():- Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value and break. Otherwise, find returns undefined
const myArray=["hello","camel","dog","lion"]

function isLength(string){
    return string.length===3
}

const ans=myArray.find(isLength)
console.log(ans);
//or
const ans1=myArray.find((string)=>string.length===3)
console.log(ans1);

//realistic eg
const user=[
    {Id:1,Name:"uttkarsh"},
    {Id:2,Name:"nayan"},
    {Id:3,Name:"krish"},
    {Id:4,Name:"nikhil"},
]
// finding user whose id is 3
const userID=user.find(user=>user.Id===3)
console.log(userID);



// --------------xxxxxxxxxxxxxxx---------------xxxxxxxxxxxxxxxxxxxxx----------------xxxxxxxxxxxxxxx
// every method():-Determines whether all the members of an array satisfy the specified test. if yes then return true else return false 
// It return boolean value either true or false , if every elemnts of given array sarasify a particular condition

const No=[2,4,6,8,10]
const checkEven=No.every(number=>number%2===0)
console.log(checkEven);


// realistic eg
// to check every product has a price of  les than 10000 or not 
const Cart=[
    {productId:1,productName:"mobile",price:12000},
    {productId:2,productName:"charger",price:1000},
    {productId:3,productName:"earphone",price:1200},
]
const check=Cart.every(item=>item.price<10000)
console.log(check);


// ---------------------xxxxxxxxxxxxxxxxxxxx-------------------xxxxxxxxxxxxxxxxxxxxxxxxx
// some method():-Determines whether any one  members of an array satisfy the specified test. if yes then return true else return false 
// returns boolean value true or false

const Num=[3,5,8,9]
// kya ek bhi number aisa hai jo odd ho 
const check$=Num.some(number=>numbers%2!==0)
console.log(check$);

const cart=[
    {Id:1,productName:"mobile",price:1624},
    {Id:2,productName:"charger",price:1000},
    {Id:3,productName:"earphone",price:12000},
]
// koi aisa product hai jiski price 5000 se upar ja rhi hai 
const Ans=cart.some(cartItem=>cartItem.price>5000)
console.log(Ans);




// -------------------xxxxxxxxxxxx--------------------xxxxxxxxxxxxxxxxxxx--------------------
// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// Start and end position can be specified. If not, all elements will be filled.

// Syntax:- array.fill(value, start, end)  // excluding end iindex


const myArr = new Array(10).fill(5)
console.log(myArr);

const myArrr=[1,2,3,4,5,6,7,8]
myArrr.fill(0,2,5);
console.log(myArrr);




//-------------xxxxxxxxx--------------------xxxxxxxxxxxxx-------------------xxxxxxxxxxxxxx---------
//splice method():-The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.

//array.splice(index you want to start with, howmany delete count(optional), item1, ....., itemX(optional) )
// we will use this method ,when we want to insert or delete any element in between array 


const MyArray=["item1","item",'item3']

// deleting => @returns — An array containing the elements that were deleted.
const deletedItem=MyArray.splice(1,2)  // here element at first index will delete and thereafter also deleter bcox 2 
console.log(MyArray);
console.log(deletedItem);

// inserting
MyArray.splice(0,0,"inserted1","inseted2")
console.log(MyArray);

// deleteing and inserting simultaneously
MyArray.splice(1,2,"insertedX","insertedY")
console.log(MyArray);