const myName = "Rashid"
let  repoCount = 50

console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const gameName = new String ('rashid')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.charAt(2));

console.log(gameName.indexOf('r'));

const newString = gameName 
console.log(newString.substring(0,4));

const anotherString = newString
console.log(anotherString.slice(-9,4));

const newOne = "    Rashid    "

console.log(newOne.trim());
console.log(newOne);

const lastOne = "rashid-hh-ss"

console.log(lastOne.replace('-','%'));

console.log(lastOne.includes('ss'));

console.log(lastOne.split('-'));


