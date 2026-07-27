// Dates 

let myDate = new Date()
// console.log(typeof myDate);

// console.log(myDate);
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());


// let myCreatedDate = new Date (2023,0,12)
// let myCreatedDate = new Date (2025,3,10,3,3)   // in this 
// let myCreatedDate = new Date("2027-01-12")
let myCreatedDate = new Date ("01-14-2023") 
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()

console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    calendar : "long"
})





