//Objects can be created using function
// Object.create() - this object is singolton 

//object literal
// Object can be created by another method
const mySym = Symbol("key1");
const Obj = {
    name: 'Coding',
    "full name":"Coding Tabs",
    age:21,
    location:"Phagwara",
    [mySym]: "This is a symbol key",
};


// console.log(Obj);
// console.log(Obj.name);// we can access values form an object by (.) dot method but in some cases it will not work
// console.log(Obj["full name"]);// we can access values from an object using array method as in dot method we can't use space in between like "full name" or we can't use string after dot to access.
// console.log(Obj.name);
// console.log(Obj.name);

// We can destructure Objects
const course = {
    name:"Chai aur Code",
    price:"free",
    courseInstructor:"Hitesh"
};

//Object destructuring
let {courseInstructor} = course;//we can change the courseInstructor to instructor also
let {courseInstructor:instructor} = course;
console.log(courseInstructor);
console.log(instructor);

// Data flow on internet in the form of JSON(JavaScript Object Notation).
// JSON is a lightweight data interchange format that is easy to read and write.
// It is language independent and can be used with any programming language.
// JSON is a text-based format that represents data as a collection of key-value pairs.

