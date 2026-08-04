const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map( (nums) => {return nums + 10 })
// console.log(newNums);


// +++++++++++++++++++++++++++++++++++ Chaining ++++++++++++++++++++++++++++++++++++++

const myNums = myNumbers
                        .map( (nums) => nums *10)
                        .map( (nums) => {return nums + 1})
                        .filter( (nums) => {return nums >= 40})

console.log(myNums);
