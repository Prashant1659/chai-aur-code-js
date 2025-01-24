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


const user ={
    username:"Coding",
    price:199,
    //This help to refer current context;
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this);// In this case current context is user Object so it will print object
    }
}   

// console.log(user.welcomeMessage);

// console.log(this);
//In this case this refer to global context that means in node it is an empty object ({});
//Whereas in browser console if we log(this), it refer to window object as at that time window is current context.

function chai(){
    let username = "Coding";
    console.log(this.username);
    //In this case log(this.username) will print undefined as this doesn't work in functions.
}

chai();

// This function returns value explicitly means we need to return by ourself
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// These two functions return implicitly as they don't require return statement, they will return automatically
// const addTwo = (num1,num2) => num1 + num2;

// This syntax is majorly used in react
// const addTwo = (num1,num2) => (num1 + num2);

console.log(addTwo(3,4));

