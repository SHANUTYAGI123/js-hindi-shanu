// array

const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4)
// console.log(myArr[1]);
// console.log(myArr2[2]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop() // it removes the last index's element
// console.log(myArr2[1]);
// myArr.unshift(9) // it adds element at the zeroth index
// myArr.shift() // it removes the zeroth index's element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// const newArr=myArr.join() // it changes the type of newly created array into strings
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A " , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("c ",myArr);

// splice manipulates the original array but slice not
