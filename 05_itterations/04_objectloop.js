// const myObject = {
//     js : "JavaScript",
//     py : "Python",
//     rb : "Ruby",
//     swift : "Swift"
// }

// for (const key in myObject) {
//     console.log(`The Shortcut for ${myObject[key]} is ${key}`);
    
// }


const newArray = ["rb","js","sw","py","cpp"]

for (const key in newArray) {
//    console.log(newArray[key]);
   
}

const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("Fr","France")
map.set("IN","India")

for (const key in map) {
   console.log(key);
   
}

// map is not itteratible for (for in loops)