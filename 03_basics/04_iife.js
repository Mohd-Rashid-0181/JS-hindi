// Immediately Invoked Function Expression (IIFE)
/* IIFE is that type of function who saves us from the pollution of global scope or help us for removing the pollution of gloobal scope */

(function chai (){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

// there is two parannthesis the first one is for func.'s defination and the second one is for immediate call to excute the function and one more thing is also important we have to write the semicolumn(;) for ending the first iife otherwise the code shows error in runtime 

((name) => {
    console.log(`DB CONNECTED TWO ,${name}`);
})('Rashid')