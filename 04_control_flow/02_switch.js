// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// const month = 2

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         // break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("Nothing Matches");
//         break;
// }

// when we matches a condition and didnot write the break then when our condition matches all the code executed after condition and ofcourse condition also but default does not executed 
// And when we give a varible's value in string and any datatype then make sure we also give the value in switch in that datatype 

const month = "July"

switch (month) {
    case "Jan":
        console.log("January");
        break;
    case "Mar":
        console.log("March");
        break;
    case "Jun":
        console.log("June");
        break;
    case "July":
        console.log("July");
        break;

    default:
        break;
}