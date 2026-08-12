// Object Lateral

const users = {
    username : "Rashid",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function () {
        // console.log("Got User Details From Database");
        // console.log(`Username : ${this.username}`);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// Constructor

// new is a constructor that allows us to make  multiple instances from one Object

function user (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;                // Implicit Define
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Username : ${this.username}`);
        
    }

    return this
}

const userOne = new user("Rashid", 18,true)
const userTwo = new user("Khalid", 15,false)

console.log(userOne.constructor);
// console.log(userTwo);

// Step-1 : new object created
// Step-2 : constructor keyword called because of new() keyword
// Step-3 : this keyword injectd in constructor 
// Step-4 : all the parameters return  in a function 
 