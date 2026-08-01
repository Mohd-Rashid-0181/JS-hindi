// Singleton (https://dev.to/tomekbuszewski/singleton-in-javascript-1d5i)
// constructure makes singleton everytime lateral not
//  constructure method (object.Create)

// Object literals

const mySym = Symbol("key1")  // Declaration of symbol

const JsUser = {
    name : "Rashid",
    "full_name" : "Mohd Rashid",
    [mySym] : "myKey1",   
    // for using symbol as symbol we have to use variable in [] (square brackets)
    age : 18,
    email : "rashid@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}


//  Access Method 

// console.log(JsUser.isLoggedIn);    // Normal (.) => not work on string type
// console.log(JsUser["full name"]);  // Square Notation (Specially for string type )
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);

JsUser.email = "rashid@chatgpt.com"
// Object.freeze(JsUser)    
// freeze is used for freezing the object and after that we don't able to change the values of elements in objects
JsUser.email = "rashid@microsoft.com"
JsUser.age = 21

// console.log(JsUser);
// console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

