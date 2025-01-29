// Js doesn't have classes it have Object Literals. It looks like js have but under the hood it is same as before
const User = {
    username : "Prashant",

    greeting:function(){
        console.log(`Welcome ${this.username}`);
    }
}

const userOne = new User("Pratik");
// const userTwo = User("Saksham");
console.log(userOne);
