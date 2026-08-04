// For 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is Best Number.");
    }
    // console.log(element);
}
// console.log(element);


for(let i=1; i<=10; i++){
    // console.log(`Table of  ${i}`);
    for(let j=1; j<=10; j++){
        // console.log(`Outer loop is ${i} and Inner loop is ${j}`);
    //     console.log(i + '*' + j + '='  + i * j);
    }
}


const myArray = ["Flash", "Superman", "Batman"]
    // console.log(myArray.length);

for(let i=0; i<myArray.length; i++){
    const length = myArray[i]
    // console.log(length);
}

// for(let i = 1; i <= 20; i++){
//     if(i == 5){
//         console.log(`Number 5 Detected`);
//         break
//     }
//     console.log(`Value of i ${i}`);
    
// }


for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`Number 5 Detected`);
        continue
    }
    console.log(`Value of i ${i}`);
    
}


// break and continue keyword 

// break keyword is used for exit from the loop when our condition is matches 
// continue keyword is used for ignoring the codition when condition matches 