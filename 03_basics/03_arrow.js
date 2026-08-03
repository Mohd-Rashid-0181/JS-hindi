const user = {
    username : "Rashid",
    price : 999,
    welcomeMessage : function (){
        console.log(`${this.username}, Welcome to Website `);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);

// this is a keyword who is referred to the current context and in brower this is a window object because in browser window is a global object and in node environment this is a emmpty object--({})

// function chai (){
//     const username = "rashid"
//     console.log(this.username);
// }

// chai()

// in functions we cannot access this keyword

// const chai = function (){
//     const username = "sam"
//     console.log(this.username);
// }
// chai()

// ++++++++++++++++++++++++++++++++ Arrow Function +++++++++++++++++++++++++++++++++++++++

const chai = ()=> {
    const userName = "sammy"
    console.log(this);
    
}
chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2          // Explicit return
// } 
// console.log(addTwo(4,5))

// in curly braces it is compulsory to write the return keyword but not in implicit return when we define a arrow function without using the curly  braces like line no. 50 

// const addTwo = (num1,num2) => (num1 + num2 )  // Implicit return 

// console.log(addTwo(4,5)) 

const addTwo = (num1,num2) => ({username : "Rashid"})

console.log(addTwo(4,5));

// paranthesis is important because when we donot return the object in func. with curly braces for returning the object we have rap the onject inside the paranthesis that's why this syntax has a little bit of advantage over curly braces 


