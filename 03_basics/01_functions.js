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

console.log(logInUserMessage());