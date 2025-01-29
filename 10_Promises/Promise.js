
// const promiseOne = new Promise((resolve,reject)=>{
//     console.log("In Promise One");
//     resolve();
// })

// promiseOne;

// const promiseTwo = new Promise((resolve,reject) => {
//     setTimeout(function(){
//         console.log("In Promise Two");
//     },2000);
//     resolve();
// })

// promiseTwo;


// const promiseThree = new Promise( (resolve,reject) => {
//     let error = true;
//     if(!error){
//         console.log("In promise THREE");
//         resolve({username:"Prashant",password:"123456"});
//     }else{
//         reject("Error in proimseThree");
//     }
// } )

// promiseThree
// .then( (response) => {
//     console.log(response);
//     console.log(typeof response);
// })
// .catch( (err) => console.log("E: ",err) );

// async function apiCall(){

//    try{ 
//         const response = await promiseThree;
//         console.log(response);
//         console.log(typeof response);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// apiCall();

// fetch('https://api.github.com/users/prashant1659')

// async function apiCall(){
//     try{
//         const response = await fetch('https://api.github.com/users/prashant1659');
//         console.log(response);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// apiCall();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    console.log(response);
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((err) => console.log("Error : ",err));