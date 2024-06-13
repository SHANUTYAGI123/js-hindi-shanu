// singleton
// object.create

// object literal

const mySym= Symbol("key1")


const JsUser={
    name: "Shanu",
    "full name":"Shanu Tyagi",
    age: 19,
    [mySym]:"myKey1", // using symbol datatype as a key in object
    location: "jaipur",
    email: "tyagishanu75@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="shanu@adobe.com"
// Object.freeze(JsUser) // it freezes the object after this no changes can occur
JsUser.email="shanu@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());