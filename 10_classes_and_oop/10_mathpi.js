const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// Object.defineProperty(Math, "PI",{
//     writable: true,
//     enumerable : true
// })

// console.log(Object.getOwnPropertyDescriptor(descripter,Math));


// console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai= {
    name : "Ginger tea",
    price : 250,
    isAvalable : true,

    orderChai : function(){
        console.log("Code Phat Gaya ");
        
    }
}


Object.defineProperty(chai,'name',{
    writable : false,
    enumerable : false,
    configurable : false,

})

// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

// chai.name = 'Masala Tea'

// console.log(chai.name);

for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
        
    }    
}