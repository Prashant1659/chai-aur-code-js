
//Scopes in node environment and scope in browser js console is different.

//In this case the function will execute and we will have an output.
console.log(addOne(5));
function addOne(num){
    return num + 1;
}

console.log(addTwo(4));//This will not execute as function is defined after this call (Hoisting-{Refer mdn for more}).

//addTwo is a expression now as it holds some value
const addTwo = function(num){ // This is known as hoisting 
    return num + 2;
}
//the above function executed because it is not assigned to a variable whereas the addTwo function is assigned to a variable(function expression),
// in JS we need to declare a variable before using it, exception "var" to know more about function expression [`https://www.w3schools.com/js/js_function_expressions.asp`]