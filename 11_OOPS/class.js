class User{
    constructor(username){
        this.username = username;

    }

    logMe(){
        console.log(this.username);
    }

    static createId(){
        return `1234`;
    }
};


const chai = new User("chai");
// console.log(chai);
// chai.logMe();
// console.log(chai.createId());

// If i don't want to and object to have access to some function(method) then we use static keyword.

// console.log(chai.createId()); //this code will show some errors as the method is static

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log("A course added");
    }
}

const Tea = new Teacher("Tea","Tea@tea.com","1234");

console.log(Tea);

// console.log(Tea.createId()); // This will also show errors as static keyword doesn't allow extended classes to access that method.