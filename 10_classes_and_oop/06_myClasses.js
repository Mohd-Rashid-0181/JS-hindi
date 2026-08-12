// class user {
//     constructor (username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;

//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername (){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("Rashid", "Chai@google.com", "1234")
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// Behind THe Scene

function user (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user("Tea", "Tea@google.com", "1334")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

