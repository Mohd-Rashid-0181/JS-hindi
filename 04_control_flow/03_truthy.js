const userEmail = []

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Didn't got the user email");
}

// Falsy values

// false, 0, -0, bigInt 0n, "", null, undefined, NaN

// Truthy values

// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// object keyword returns array when we that propertiess of it 
// Object.keys(obj)                                   // false == 0 => true
// Object.values(obj)                                 // false == '' => true
// Object.entries(obj)                                // 0 == ''  => true
// Object.getOwnPropertyNames(obj)
// Object.getOwnPropertySymbols(obj)

