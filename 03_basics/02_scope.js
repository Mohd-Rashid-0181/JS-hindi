var c = 300               // Global scope 
let a = 400


if(true){
    let a = 10
    const b = 20   // block scope 
    var c = 40

    // console.log("INNER",a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Rashid"

    function two(){
        const website = "Amazon.in"   
        // in scope child  func. can access the parrent func.'s property  but parent do not  that's why there is func. two who is child  is access the username of func. one who is parent  
        
        // console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username = "Rashid"
    if(username === "Rashid"){
        const website =  " Google.in"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++++

addOne()  
function addOne (num){
    return num + 1
}

addTwo()
const addTwo = function (num){
    return num + 2
}

/* when we declare a function we can call the function before the start  of function but when we hold function in a variable we cannot call a function before the start of function 
and that's called HOISTIG in JavaScript */