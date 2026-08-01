const maarvel_heroes = ["thor","Spiderman","Ironman"]
const dc_heroes = ["Spiderman","Batman","Flash"]

// maarvel_heroes.push(dc_heroes)  // push emrgee two arraays and hold one in another one 

// console.log(maarvel_heroes);
// console.log(maarvel_heroes[3][2]);

const allHeroes = maarvel_heroes.concat(dc_heroes) 
//concaat emerges two arrays and gives the new one array

// console.log(allHeroes);

const all_newHeroes = [...maarvel_heroes, ...dc_heroes]  
// ...(spread) do the same work as concat 

// console.log(all_newHeroes);

const another_array = [1,2,3,[4,5,6],6,[6,7,[4,5]]]
const realAnother_array = another_array.flat(Infinity)
// Flat Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(realAnother_array);


console.log(Array.isArray("Hitesh")); // for asking that is it array or not
console.log(Array.from("Hitesh"));  // for converting into array 

console.log(Array.from({name: "Hitesh"})); 
 // Interesting because this gives us empty array because we don't tell it that its work is convert keyword (name) or its value ("hitesh")


const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));
// of : returns a new array from a set of elements 
