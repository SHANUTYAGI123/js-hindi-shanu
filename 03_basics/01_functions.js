function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("U");
}

// sayMyName()

// inputs given during the formation/definition of function are known as parameters and inputs given during calling are known as arguments

// function add2numbers(number1, number2) {
//     console.log(number1 + number2);
// }
function add2numbers(number1, number2) {
    // let result=number1+number2
    // return result
    return number1+number2
}

const result= add2numbers(3, 4)
// console.log("Result", result);

function logInUserMessage(username="You"){
    // if(username===undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage());

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(100,200,556));

const user={
    username: "Shanu",
    price:299
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// function handleObject(user){
//     console.log(`username is ${user.username} and price is ${user.price}`);
// }

// handleObject(user)
handleObject({
    username:"Shanu",
    price:299
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));

