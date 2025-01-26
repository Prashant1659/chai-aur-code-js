
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

let arr = [1, 2, 3, 4, 5];

// For of loop provide the value;

for(const num of arr){
    // console.log(num);
}

// For in loop provides the index of the value;

for(const num in arr){
    // console.log(arr[num]);
}

let map = new Map();

map.set("IN","India");
map.set("Fr","France");
map.set("It","Italy");


for(let key of map){//In this for loop every key is an array
    // console.log(key);
}

for(let [key, value] of map){// In this for loop we destructure array into key value pair
    // console.log(key,": ",value);
}

const myObject = {
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
};

// For of loop doesn't work in objects, we use for in loop in case of object

// for(const key of myObject){
    // console.log(key);
// }

for(const key in myObject){
    // console.log(`${key} : ${myObject[key]}`);
}

let coding  = ["js","java","cpp","python","ruby"];

// coding.forEach( function(val){
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe);

// Filter method

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num>5);
// console.log(newNums);

// Map method 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map( (num) => num * 10);
// console.log(newNums);

// we can do method chaining
// const newNums = myNums.map( (num) => num * 10 ).filter( (num) => num > 50 );
// console.log(newNums);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const res = myNums.reduce( (acc,currval) => acc+currval,0);

// Initially we need to provide some value ot acc i.e. in this case i have provided 0 as initial value.
const res = myNums.reduce( (acc,currval) =>{
    return acc+currval;
},0 ) 
console.log(res);