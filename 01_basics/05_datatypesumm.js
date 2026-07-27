// DataTypes

// premetive

// 7 typess : String, Number ,Boolean , Null , Undefined , Symbol ,BigInt 

const Score = "100"
const ScoreValue = 100.3

const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') 
const anotherId = Symbol('123')

// console.log(id == anotherId);

// const bigNumber = 32503315541032351326462n



//Non-premitive

//3 types: Arrays, Objects, Functions

const heros = [ "Shaktiman" , "Thor" , "Captain America"]

// let myObj = {
//     name= "rashid",
//     age = 19
// }

const myFunction = function (){
    // console.log("Hello World ");
}

// console.log(typeof bigNumber);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive)  , Heap(non-primitive)

let myYoutubename = "TED ENglish"
let newName = myYoutubename

newName = "MIT America"

// console.log(newName);
// console.log(myYoutubename);


let clientOne = {
    email : "saif@google.com",
    Name : "Mohd Saif"
}

let clientTwo = clientOne

clientTwo.email = "rasshid@jmi.ac.in"

console.log(clientOne.email);
console.log(clientTwo.email);

