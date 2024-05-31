const accountId=14453
let accountEmail="shanu@google.com " // it is first type of variable declaration 
var accountPassword="12345" // and it is second type of variable deeclaration but it is not used oftenly. because in var there is a problem of block scope
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
accountCity="Delhi"
let accountstate;
// accountId=2 // it is not allowed beacause accountID is constant 

accountEmail="tyagi@gmail.com" //it is allowed
accountPassword="965026" //it is also allowed
accountCity="mumbai" // it is also allowed

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId , accountEmail , accountPassword , accountCity , accountstate])