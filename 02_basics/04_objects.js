// const tinderUser = new Object()  // Singleton object
const tinderUser = {}  // non singleton object 
//  both of them gives  the same output 

tinderUser.id = "123abc"
tinderUser.isLoggedIn = false
tinderUser.name = "Sammy"

// console.log(tinderUser);

const regularUser = {
    email : "some@google.com0",
    fullName : {
        userFullName : {
            firstName : "Mohd",
            lastName : "Rashid"         // Nesting Object
        }
    }
}

// console.log(regularUser.fullName.userFullName);     // Optional Chaining (?)

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {4 : "a", 3 : "b"}
const obj3 = {5 : "a", 6 : "b"}

// const obj4 = Object.assign({},obj1,obj2,obj3)  
// we give the {} for comfirming that the target object is this  otherwise all the values goes in the obj1  

// console.log(obj4);

const obj4 = {...obj1,...obj2,...obj3}  
// Spread operator we used it in array and object both

// console.log(obj4);

const users = [
    {
        id : "123",
        name : "rashid"
    },
    {
        id : "456",
        name : "khalid"
    },
    {
        id : "789",
        name : "gulam haider"
    }
]

users[1].email   // accessing method of array object 
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));  // give all keys in the array format
// console.log(Object.values(tinderUser)); // give all values in the array format 
// console.log(Object.entries(tinderUser));
// give each key value pair in array and whole of them inside an array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// for asking the it has property or not 


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// De-structuring offers in both Arrays and Objects


const course = {
    courseName : "JS in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor  // bad for readibility

const {courseInstructor : instructor} = course  // De-structuring 

console.log(instructor);

// +++++++++++++++++++++++++++++ API(JSON) +++++++++++++++++++++++++++++++++++


// {
//     "name": "Mohs Rashid ",
//     "Gender" : "Male",
//     "Age" : "19"
// }

[
    {},
    {},
    {}
]