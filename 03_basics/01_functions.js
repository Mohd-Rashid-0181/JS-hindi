function sayMyName (){
    // console.log("R");
    // console.log("A");
    // console.log("S");
    // console.log("H");
    // console.log("I");
    // console.log("D");   
}

sayMyName()

function addTwoNumbers (number1,number2){
    console.log(number1 + number2);
}
function addTwoNumbers (number1,number2){
    // let result = number1 + number2
    // return result   // no code run after the return 
    // console.log("hitesh");
    return number1 + number2

}

const result = addTwoNumbers(3,null)

// console.log("Result :",result);

function userLoggedIn (username = "Sam"){
    if(!username){
        console.log("Please Enter the Value");
        return
    }
    return `${username} just logged in`
}
// console.log(userLoggedIn("Rashid"));
// console.log(userLoggedIn()); // if we give no value then it returns undefined not null 

function calculateCartValue(val1,val2,...num1){    // (...) Rest or Spread operator according to conditions 
    return num1
}

// console.log(calculateCartValue(200,4000,5000,4000.83)); 
// Output (5000,4000..83) beacause the first two values are give to the val1 and val2

const user = {
    username : "Rashid",
    Price : 700
}

function handleObject (anyUser){
    // console.log(`Username is ${anyUser.username} and the price is ${anyUser.Price}`);
}

// console.log(handleObject(user));

handleObject({
    username : "Sirri",
    price : 2999
})

const myNewArray = [200,400,500,5000]

function returnValue (nerArray){
    return nerArray[3]
}

// console.log(returnValue(myNewArray));
console.log(returnValue([100,2000,20000,300,977]));


