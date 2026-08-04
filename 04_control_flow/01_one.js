// if 

// const temperature = 41
// if(temperature === 50){
//     console.log("Temperature is less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// <,>,<=,>=,===,!==,!=,== (Operators)

// const score = 200

// if(score >100){
//     const power = "fly"
//     console.log(`User Power ${power}`);
// }

//  console.log(`User Power ${power}`);


const balance = 899
// shorthand don't write in this way

// if(balance > 500) console.log("Test"),console.log("test2");

// if(balance < 500){
//     console.log("Less Than 500");
// } 
// else if(balance < 750){
//     console.log("Less Than 750");
// }
// else if(balance < 900){
//     console.log("Less Than 900");
// }
// else{
//     console.log("Less Than 1200");
// }


const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

// if( userLoggedIn && debitCard && LoggedInFromEmail || LoggedInFromGoogle){
//     console.log("Verification Completed and User Allowed For Shoping");
// }

// if(LoggedInFromEmail || LoggedInFromGoogle){
//     console.log("allowed");
// }
                                   // for cheking multiple statements
// if(userLoggedIn && debitCard ){
//     console.log("Ofcourse Allowed");
    
// }

// && (all the condition are true otherwise returns false)
// || (in this operator even one condition is true  then it returns true)

// Nullish Coalescing Operator (??) : null , undefined
// this operator is kept us away from null and undefined and returns the first value and if we have only options (null,undefined),then it returns the second value otherwise  always first value but (undefined || null) ?? 10) in this case it returns the after value of (null or undefined)


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 20 ?? 30
// val1 = null ?? undefined 
// val1 = undefined ?? null 

// console.log(val1);

// Ternary Operator (?)

// condition ? true : false

const price = 100
price >= 80 ? console.log("less than 80") : console.log("Greater Than 80");

