// Singleton

// Object Literals

const mySym  = Symbol("key1");

const JsUser = {
    "full name": "Harshit Sharma",
    name: "Harshit",
    [mySym]: "mykey1",
    age: 25,
    location: "Ghazipur",
    email: "harshitndj15@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "yhs1234567875@gmail.com";
//Object.freeze(JsUser);
JsUser.email = "yhs1234567875@hotmail.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User!");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User!, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

