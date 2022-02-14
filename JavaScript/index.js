//    javascript console api (app programming interface)

// document.write('This is document write')
// console.warn("This is a warning")
// console.error("This is an error")
// console.clear()
// console.assert(4 == (6 - 2))

// ===============================================================================variabels

// var age = 19
// var myname = "Suraj Mishra"

// console.log(myname, " is ", age, " years old")

//====================================================================objects (like key value pairs)

// var marks = {
//     ram: 34,
//     suresh: 20,
//     suraj: 100
// }

// console.log(marks.ram)
// console.log(marks.suraj)


//========================================================================= array (like list in python)
// var s = [1, 2, 3, "hello", 5]
// console.log(s)
// console.log(s[3])



//=========================================================================== Data types info
// bydefault value undefined hoti hai
// undefined and null is different


// there ar two types of data types in js
// primitive : undefined null strings boolean  number symbol 
// refrence  :  arrays objects


// ======================================================================Functions 

// function avg(a, b) {
//     return (a + b) / 2
// }

// var c = Math.floor(avg(4, 9))

// console.log(c)



// ================================================================Conditions

// var age = 20
// if (age < 0) {
//     console.log("You are not born yet")
// } else if (age > 0 && age < 18) {
//     console.log("You cannot drive")
// } else {
//     console.log("You can drive")
// }



// ==================================================================loop

// var arr = [0, 1, 2, "hello", 5, 6, "bro"]
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// arr.forEach(function(element) {
//     console.log(element)
// })


//======================================================= diffrence between var and let
/*

let is only valid in a scope within the block so we can make temporary variables
so we will use let from now 
better memory management using let 

*/

//========================================================== array methode

// console.log(arr.length)
// arr.push("suraj")
// arr.pop()
// arr.shift() // pop but starting se
// arr.unshift("rajesh") //push but starting se , agar console.log karoge to new aee ki length dega
// arr.sort()  // pehle str me convert karke phir alphabe=atically sort kar dega
// arr.toString()

// arr.forEach(function(element) {
//     console.log(element)
// })

// ============================================================string method
// mystr.slice(strt , end+1)
// mystr.replace(old, new)

// ==============================================================Dates

// let mydate = new Date();
// console.log(mydate);

// I understand the difference in behavior. Date() returns a String representing the current date, 
// and new Date() returns an instance of the Date object whose methods I can call.



// ===================================================================DOM( Document object model ) manupulation

/* 
document
document.title
document.location
document.url
document.scripts
document.links


document.getElementById
document.getElementsByClassName
document.getElementsByTagName

ele.innerHTML
ele.innerText

can change the css of ele using JSON

document.createElement('tag')

ele.classlist
ele.classlist.add
ele.classlist.remove
ele.classlist.replace

ele.appendChild
ele.replaceChild
ele.removeChild


also access ele using query selector
*/

// ==========================================================================arttribute change

// var att = document.querySelector("h1").getAttribute("href")
// document.querySelector("h1").setAttribute("href" , "google.com")



// ===================================================================Events

// Events is anything happening
// we can litsen them

// function clicked() {
//     console.log("Button clicked")
// }

// window.onload = function() {
//     console.log("Window started")
// }

// Firstcontainer.addEventListener('click', function() {
//     console.log("Clicked on first container")
// })

// Firstcontainer.addEventListener('mouseover', function() {
//     console.log("Hovering on first container")
// })

// ======================================================================== Arrow func

// function summ(a, b) {
//     return a + b
// }

// //above func can also write as

// summ = (a, b) => {
//     return a + b
// }


// ========================================================================== SetTimeout   setInterval

// setTimeout is used for schedule a task

// logkaro = () => {
//     console.log("I am your log")
// }

// setTimeout(logkaro, 2000) // func and execute timing after x milisec

// clr = setTimeout(logkaro, 2000) // here settimeout returns an id , 
// if we give it to , clearTimeout(clr)  , it will cancel teh schedule task


// setInterval(logkaro, 5000) // it will repeatedly do task in interval of x milisec

// clr = setInterval(logkaro, 2000) // return id , give it to clearInterval to stop it

// =================================================================================== JSON

//  json not suport single quote

// obj = { name: "suraj", age: 12 }
// ele = JSON.stringify(obj)
// console.log(ele)

// parsed = JSON.parse('{"name":"suraj","age":12}')
// console.log(parsed)



// ===================================================================== ECMAscript

// ye bas ek strandard hai jisse js ko update kara jata hai