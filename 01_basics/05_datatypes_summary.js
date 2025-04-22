/* Primitive Datatype
   7 types : String, Number, Boolean, null,
             undefined, Symbol, BigInt */

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

//console.log(id === anotherId);

const bigNumber = 345678909876543345678n;



/* Non-Primitive (Reference Type)
    Array, Objects, Functions*/
const heroes = ["shaktiman","nagraj","doga"];
let myObj = {
    name: "Harshit",
    age: 22,
}

const myFunc = function() {
    console.log("Hello Harshit!");
}

//console.log(typeof anotherId);

// ++++++++++++Stack and Heap +++++++++++++++
// Stack(Primitive), Heap (Non-Primitive)

let myYoutubeName = "harshitndj";

let anotherName = myYoutubeName;
anotherName = "Chai Aur Code";

console.log(anotherName);
console.log(myYoutubeName);

let user1 = {
    email: "harshitndj15gmail.com",
    upi: "8423858661@ybl",
}

let user2 = user1;
user2.email = "yhs1234567875@gmail.com";

console.log(user1.email);
console.log(user2.email);
