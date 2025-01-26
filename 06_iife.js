// Immediately Invoked Function Expressions (IIFE)

// TO provide safety from global pollution of variables we use IIFE

(function chai(){

    // Named IIFE
    console.log("Chai");
})()

// syntax of IIFE 

()();

// In first () we define the function and the second () will execute the function immediately for us.
// We need to end the execution of IIFE. We can stop it by putting a semi-colon{;} at the end of IIFE.

