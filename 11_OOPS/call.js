function setUsername(username){
    this.username = username;
    console.log("Called");
}

//When a functoin calls another function it doesn't execute by just applying (). We need to call it explicitly using call function
//When call function is used we need to pass an optional parameter as this, so that called function can know context of the variable.
function createUser(username, email,password){
    // setUsername.call(username);
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const user = new createUser("Prashant","Prashant@google.com","1234");

console.log(user);