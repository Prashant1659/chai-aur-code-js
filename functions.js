// When we need to do some task multiple time we make it a function and call it.
function sayMyName(){
    console.log("Prashant");
}

sayMyName// This is reference to the function
sayMyName();// This is call to the function

// Parameter is when variable is in function defination
function addTwoNumbers(number1,number2){
    return number1 + number2;
}

console.log(addTwoNumbers(3,4));

//Argument - when variables are passed in function call are known as arguments