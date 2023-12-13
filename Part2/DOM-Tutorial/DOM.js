// Dom :- Document object model 












// select element using get element by id  and query selector
let a = document.getElementById("main-heading")
console.log(a)

 let b= document.querySelector(".section-todo");   // query selector se ham log koi bhi element ko select kr skte hai chahe vo id ho ya class ho ya element ho 
 console.log(b);


 // changeText
 // textContent and innerText
  let mainHeading=document.getElementById("main-heading")  // mainHeading ke andar ek object aa gya hai aur id unique hoti hai to sirf ek element aaega object me
  console.log(mainHeading.textContent); // textContent ek property hai mainHeading name ke object ki jiske pass text hai ,aur jo bhi text hide hai vo bhi dikhega 
  console.log(mainHeading.innerText); // innerText vo sare text lake dega jo  hide ni hai 
  mainHeading.textContent="the value is reset"  // backend se ham logo ne change kr diya hia 
  console.log(mainHeading.textContent);


  // change the style of elements
  const heading=document.querySelector("Div.headline h2")// heading ke andar ek object aa gya
  console.log(heading.style);
  heading.style.color="white" 
//   heading.style.backgroudColor="blue" // yha pr background-color nhi likh skte hai 
  heading.style.border="10px solid green"




// get and set attributes

const link =document.querySelector("a")
console.log(link.getAttribute("href"));
link.setAttribute("href","https://codprog.com")



const inputEle=document.querySelector(".form-todo input")  // form-todo class ke andar jo bhi first input tag hai vo select kr rhe hai
console.log(inputEle.getAttribute("type"));



// getting multiple elements using getElements by class name
// getting multiple elements items using querySelectorAll

const navItems=document.getElementsByClassName("nav-item")  // sare elements jiski class ka name "nav-item" hai vo select ho jaege
console.log(navItems); //return HTML Collection:- output wiill be array like object

const Navitem=document.querySelectorAll(".nav-item")
console.log(Navitem); // 0,1,2 //return Nodelist:- output wiill be array like object

// iterating elements doobara padhna hai
// Iterating elements i.e selecting all the navigation menu items and changing the color of text and background
// const nav1= document.getElementsByTagName("nav-item") // sare tag jinki id "nav-item" hai vo aa jaege is object me
// console.log(nav1[1]);
// for(let i=0;i<nav1.length;i++){
//     const navItem=nav1[i];
//     navItem.style.backgroundColor="#fff"
//     navItem.style.color="green"
//     navItem.style.fontWeight="bold"
// }





// innerHTML
const headline=document.querySelector(".headline")
console.log(headline.innerHTML);
headline.innerHTML="<h1>Inner HTML changed</h1>"
heading.innerHTML+="<button class=\"btn\">Learn More</button>"
console.log(headline.innerHTML);
